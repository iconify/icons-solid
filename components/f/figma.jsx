import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t68lxlbad.css';
import '../../css/b/b573bnbic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGveGyGdGC)"><path class="t68lxlbad"/></g><defs><clipPath id="SVGveGyGdGC"><path class="b573bnbic"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:figma"} {...others} />);
}

export default Component;
