import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fktd5968h.css';
import '../../css/o/on5ya1eyp.css';
import '../../css/a/acr5d_b4m.css';
import '../../css/k/ktf15dbcr.css';
import '../../css/d/d82fqrber.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fktd5968h"/><path class="on5ya1eyp"/><path class="acr5d_b4m"/><path class="ktf15dbcr"/><path class="d82fqrber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:au-act"} {...others} />);
}

export default Component;
