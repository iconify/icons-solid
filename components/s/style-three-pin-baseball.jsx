import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o06f1cchn.css';
import '../../css/r/rgu_e105c.css';
import '../../css/e/ejlqzccxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o06f1cchn"/><path class="rgu_e105c"/><path class="ejlqzccxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:style-three-pin-baseball"} {...others} />);
}

export default Component;
