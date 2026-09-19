import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2gflfbpm.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/k/khridfthj.css';
import '../../css/g/gbimn9bdi.css';
import '../../css/l/ld4hdp05e.css';
import '../../css/b/bjwuwwbfb.css';
import '../../css/w/w80n2yvrw.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d2gflfbpm"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="khridfthj"/><path clip-rule="evenodd" class="gbimn9bdi"/><path clip-rule="evenodd" class="ld4hdp05e"/><path clip-rule="evenodd" class="bjwuwwbfb"/><path class="w80n2yvrw"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:et"} {...others} />);
}

export default Component;
