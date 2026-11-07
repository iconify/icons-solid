import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc3rqc7_z.css';
import '../../css/a/a1_algbwn.css';
import '../../css/o/ogwim4gsr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc3rqc7_z"/><path class="a1_algbwn"/><path class="ogwim4gsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-bold"} {...others} />);
}

export default Component;
