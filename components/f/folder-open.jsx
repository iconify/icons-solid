import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3ayd58ao.css';
import '../../css/k/ki6lx60di.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m3ayd58ao"/><path class="ki6lx60di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:folder-open"} {...others} />);
}

export default Component;
