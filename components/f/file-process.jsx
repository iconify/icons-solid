import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv8o2ibxb.css';
import '../../css/q/qkmfhjfvj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qv8o2ibxb"/><path class="qkmfhjfvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:file-process"} {...others} />);
}

export default Component;
