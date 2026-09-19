import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7w95cbsp.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/d/d5g8zobgk.css';
import '../../css/w/w2-dmlbzr.css';
import '../../css/y/yvtk3obra.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d7w95cbsp"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path class="d5g8zobgk"/><path clip-rule="evenodd" class="w2-dmlbzr"/><path clip-rule="evenodd" class="yvtk3obra"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:kp"} {...others} />);
}

export default Component;
