import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1m50d5hu.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="g1m50d5hu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:flip-horizontal-arrow-1-solid"} {...others} />);
}

export default Component;
