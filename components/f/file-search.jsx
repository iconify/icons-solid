import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u024hotba.css';
import '../../css/x/x4ola4brb.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/i/igllo8tla.css';
import '../../css/d/dlz_o4g1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u024hotba"/><path class="x4ola4brb"/><g class="mc2zb0bvp"><circle class="igllo8tla"/><path class="dlz_o4g1i"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:file-search"} {...others} />);
}

export default Component;
