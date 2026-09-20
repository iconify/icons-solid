import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogl56j_pb.css';
import '../../css/d/ddop6km7w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ogl56j_pb"/><path class="ddop6km7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:code-red"} {...others} />);
}

export default Component;
