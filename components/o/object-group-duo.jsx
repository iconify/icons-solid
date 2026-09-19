import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z982bgb5u.css';
import '../../css/c/cieejvb9y.css';
import '../../css/g/gei8aufil.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="z982bgb5u"/><path class="cieejvb9y"/><path class="gei8aufil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:object-group-duo"} {...others} />);
}

export default Component;
