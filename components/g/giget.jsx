import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kkj7ajkyp.css';
import '../../css/a/ao35sdk9m.css';
import '../../css/c/cxeibs-kv.css';
import '../../css/w/wvhlshw3e.css';
import '../../css/m/mp8s-2b1g.css';
import '../../css/z/z5ks_ubuq.css';
import '../../css/c/cp8q5xbyp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="kkj7ajkyp"/><path class="ao35sdk9m"/><path class="cxeibs-kv"/><path class="wvhlshw3e"/><path class="mp8s-2b1g"/><path class="z5ks_ubuq"/><path class="cp8q5xbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:giget"} {...others} />);
}

export default Component;
