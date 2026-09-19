import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzlf75b0h.css';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m1havybyp.css';
import '../../css/m/mxxpojbrp.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/n/n9f1oxiuf.css';
import '../../css/g/g-xxyhb0i.css';

const viewBox = {"width":301,"height":151};
const content = `<defs><path id="SVGiGuCgekV" class="hzlf75b0h"/></defs><g class="bi12bsetm"><path class="m1havybyp"/><path class="mxxpojbrp"/><mask id="SVGpHTGXc0w" class="n1mjunbsu"><use href="#SVGiGuCgekV"/></mask><path mask="url(#SVGpHTGXc0w)" class="n9f1oxiuf"/><path class="g-xxyhb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sb"} {...others} />);
}

export default Component;
