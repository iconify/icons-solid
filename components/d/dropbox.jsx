import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jei4ukbyl.css';
import '../../css/u/uia4ixvgg.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><path class="jei4ukbyl"/><path class="uia4ixvgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dropbox"} {...others} />);
}

export default Component;
