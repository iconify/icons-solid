import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uipgvcbdd.css';
import '../../css/c/cpiyk6e9c.css';

const viewBox = {"width":256,"height":259};
const content = `<path class="uipgvcbdd"/><path class="cpiyk6e9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pandacss"} {...others} />);
}

export default Component;
