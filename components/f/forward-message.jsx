import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ds4dt58hw.css';
import '../../css/g/g-js9qb0w.css';
import '../../css/k/kl6dl5bmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ds4dt58hw"/><path class="g-js9qb0w"/><path class="kl6dl5bmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:forward-message"} {...others} />);
}

export default Component;
