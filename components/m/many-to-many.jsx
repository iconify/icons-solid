import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jy1imkqad.css';
import '../../css/j/jmr6mcefv.css';
import '../../css/t/tusq8sbym.css';
import '../../css/l/l9ul_bcga.css';
import '../../css/t/tgiuuc7fp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="jy1imkqad"/><path class="jmr6mcefv"/><path class="tusq8sbym"/><path class="l9ul_bcga"/><path class="tgiuuc7fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:many-to-many"} {...others} />);
}

export default Component;
