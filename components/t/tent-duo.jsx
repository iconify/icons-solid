import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxa8muzrd.css';
import '../../css/o/olpi3qujl.css';
import '../../css/a/a1myf2bxc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="dxa8muzrd"/><path class="olpi3qujl"/><path class="a1myf2bxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tent-duo"} {...others} />);
}

export default Component;
