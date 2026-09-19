import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hu69m6d-e.css';
import '../../css/c/cr4r75b-y.css';
import '../../css/c/c1rhjebsn.css';
import '../../css/x/x2tzpdf2m.css';
import '../../css/q/q401bn4ge.css';
import '../../css/w/w8vd5rbli.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hu69m6d-e"/><path class="cr4r75b-y"/><path class="c1rhjebsn"/><path class="x2tzpdf2m"/><path class="q401bn4ge"/><path class="w8vd5rbli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:list-numbers"} {...others} />);
}

export default Component;
