import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le-81vboo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="le-81vboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:pin"} {...others} />);
}

export default Component;
