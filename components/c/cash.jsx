import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozrfghbao.css';
import '../../css/h/h7g0yix5d.css';
import '../../css/v/v1jjnr7lu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ozrfghbao"/><path class="h7g0yix5d"/><path class="v1jjnr7lu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:cash"} {...others} />);
}

export default Component;
