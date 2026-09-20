import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9z9i0-vb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t9z9i0-vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:cloud-o"} {...others} />);
}

export default Component;
