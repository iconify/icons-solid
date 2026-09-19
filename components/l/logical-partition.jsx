import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd4ogl5wu.css';
import '../../css/o/oqzccw9bw.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="qd4ogl5wu"/><path class="oqzccw9bw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logical-partition"} {...others} />);
}

export default Component;
