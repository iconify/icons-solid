import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/h/h1fa15bad.css';
import '../../css/e/e-ox9dfrk.css';
import '../../css/k/kio7hq5vb.css';
import '../../css/r/r8dhuib2w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><rect class="h1fa15bad"/><rect class="e-ox9dfrk"/><path class="kio7hq5vb"/><path class="r8dhuib2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ethernet-on"} {...others} />);
}

export default Component;
