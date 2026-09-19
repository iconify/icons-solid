import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcw3cwbid.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/t/tlmffzzii.css';
import '../../css/y/y4vy4lb4m.css';
import '../../css/z/zsz30hbyk.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xcw3cwbid"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)" class="tlmffzzii"><path clip-rule="evenodd" class="y4vy4lb4m"/><path class="zsz30hbyk"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:mk"} {...others} />);
}

export default Component;
