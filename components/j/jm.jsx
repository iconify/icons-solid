import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzlf75b0h.css';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ucmc02bvs.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/q/qsgkoub8r.css';

const viewBox = {"width":301,"height":151};
const content = `<defs><path id="SVGJRuOvcot" class="hzlf75b0h"/></defs><g class="bi12bsetm"><path class="ucmc02bvs"/><mask id="SVGMVPpHcRl" class="n1mjunbsu"><use href="#SVGJRuOvcot"/></mask><path mask="url(#SVGMVPpHcRl)" class="qsgkoub8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:jm"} {...others} />);
}

export default Component;
