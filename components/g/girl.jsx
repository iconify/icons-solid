import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c5fgtfbyj.css';
import '../../css/e/ephah76ie.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="c5fgtfbyj"/><path class="ephah76ie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:girl"} {...others} />);
}

export default Component;
