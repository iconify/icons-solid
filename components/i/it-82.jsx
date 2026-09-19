import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/h/h5yub43id.css';
import '../../css/w/w87otfbzz.css';
import '../../css/m/mjhx_yb_c.css';
import '../../css/q/q0jwtubjs.css';
import '../../css/m/ms03406ge.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="h5yub43id"/><path class="w87otfbzz"/><path class="mjhx_yb_c"/><path class="q0jwtubjs"/><path class="ms03406ge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:it-82"} {...others} />);
}

export default Component;
