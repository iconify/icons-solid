import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnsv-_bix.css';
import '../../css/n/n81tx26mw.css';
import '../../css/f/f-y67rbmu.css';
import '../../css/v/vngdzxbyc.css';
import '../../css/e/ed86nmtzv.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="mnsv-_bix"/><g class="n81tx26mw"><path class="f-y67rbmu"/><path class="vngdzxbyc"/></g><path class="ed86nmtzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ng-button"} {...others} />);
}

export default Component;
