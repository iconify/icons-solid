import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2w6a-biv.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r50tx25fj.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/b/bej3jbs_j.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e8nduobbl.css';

const viewBox = {"width":32,"height":24};
const content = `<defs><path id="SVGL1C2vdvi" class="t2w6a-biv"/></defs><g class="ft5dv1b6b"><path clip-rule="evenodd" class="r50tx25fj"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="bej3jbs_j"/></g><use href="#SVGL1C2vdvi" clip-rule="evenodd" class="d2kvgvbvc"/><mask id="SVGCrclueDF" width="18" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><use href="#SVGL1C2vdvi" clip-rule="evenodd" class="d2kvgvbvc"/></mask><g mask="url(#SVGCrclueDF)"><path clip-rule="evenodd" class="e8nduobbl"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:dj"} {...others} />);
}

export default Component;
