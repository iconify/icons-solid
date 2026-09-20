import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw644_pji.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vw644_pji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:thumbs-up-o"} {...others} />);
}

export default Component;
