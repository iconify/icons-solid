import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsfne-b7l.css';
import '../../css/z/z-gksw3iv.css';
import '../../css/c/crl6_3vrk.css';
import '../../css/e/et2ttgeah.css';
import '../../css/c/cybhvabkz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nsfne-b7l"><path class="z-gksw3iv"/><path class="crl6_3vrk"/><path class="et2ttgeah"/><path class="cybhvabkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:balance-one"} {...others} />);
}

export default Component;
