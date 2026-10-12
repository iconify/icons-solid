import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3m5nx0ys.css';
import '../../css/u/u2i0qcb0l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o3m5nx0ys"/><path class="u2i0qcb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:note-pencil-fill-20"} {...others} />);
}

export default Component;
