import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd4ogl5wu.css';
import '../../css/g/geq_pu3ca.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="qd4ogl5wu"/><path class="geq_pu3ca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-structured"} {...others} />);
}

export default Component;
