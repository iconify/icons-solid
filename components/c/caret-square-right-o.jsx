import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cflr1ab0i.css';
import '../../css/u/uu2hu__dz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cflr1ab0i"/><path class="uu2hu__dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:caret-square-right-o"} {...others} />);
}

export default Component;
