import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7dbbrb5t.css';
import '../../css/h/hp-202bvr.css';
import '../../css/r/rg72-z8_x.css';

const viewBox = {"width":1558,"height":496};
const content = `<path class="c7dbbrb5t"/><path class="hp-202bvr"/><path class="rg72-z8_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:makemytrip"} {...others} />);
}

export default Component;
