import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py7ktqbvf.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhj_8ubzq.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGN18ileSR" class="py7ktqbvf"/></defs><g class="ft5dv1b6b"><g clip-path="url(#SVG3qA7XbCf)"><g clip-path="url(#SVG3qA7XbCf)"><path class="fhj_8ubzq"/></g></g><defs><clipPath id="SVG3qA7XbCf"><use href="#SVGN18ileSR"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:pinterest-fill"} {...others} />);
}

export default Component;
