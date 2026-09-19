import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/seiziu8bo.css';
import '../../css/m/md286fbip.css';
import '../../css/a/aapfjobfn.css';
import '../../css/h/ho00jgb8a.css';
import '../../css/q/qn6txmbeu.css';
import '../../css/f/f7addldtv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="seiziu8bo"/><g class="md286fbip"><path class="aapfjobfn"/><path class="ho00jgb8a"/><path class="qn6txmbeu"/><path class="f7addldtv"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:gzr"} {...others} />);
}

export default Component;
