import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er-mwtbxn.css';
import '../../css/c/cflr1ab0i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="er-mwtbxn"/><path class="cflr1ab0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:minus-square-o"} {...others} />);
}

export default Component;
