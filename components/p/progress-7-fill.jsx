import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i64g3g2nn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i64g3g2nn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:progress-7-fill"} {...others} />);
}

export default Component;
