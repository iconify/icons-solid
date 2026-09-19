import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/t/tj4iztb1z.css';
import '../../css/i/io705ubmj.css';
import '../../css/k/ko3epyyfu.css';
import '../../css/b/bsmxqbbmj.css';
import '../../css/h/hs4b-epkr.css';
import '../../css/o/opmus8fye.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="tj4iztb1z"/><path class="io705ubmj"/><path class="ko3epyyfu"/><path class="bsmxqbbmj"/><path class="hs4b-epkr"/><path class="opmus8fye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:click-tap"} {...others} />);
}

export default Component;
