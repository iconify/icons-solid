import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmqtb0_hq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmqtb0_hq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:vuejs-alt"} {...others} />);
}

export default Component;
