import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7r--kwbe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y7r--kwbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:grid-bevel"} {...others} />);
}

export default Component;
