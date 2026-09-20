import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck7oek4jj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ck7oek4jj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:sun-o"} {...others} />);
}

export default Component;
