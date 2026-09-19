import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/a/am1igebwo.css';
import '../../css/c/c5dwnijuu.css';
import '../../css/e/e3l3qbcgf.css';
import '../../css/e/eaezi2ufu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="am1igebwo"/><path class="c5dwnijuu"/><path class="e3l3qbcgf"/><path class="eaezi2ufu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:expand-up"} {...others} />);
}

export default Component;
