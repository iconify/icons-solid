import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx50cdblo.css';
import '../../css/q/qlt_8zq6z.css';
import '../../css/g/gqc9d0bgr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dx50cdblo"/><path class="qlt_8zq6z"/><path class="gqc9d0bgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:goal-filled"} {...others} />);
}

export default Component;
