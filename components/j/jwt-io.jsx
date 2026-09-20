import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibyslbbmf.css';
import '../../css/y/yriz58ygt.css';
import '../../css/e/edcck1bde.css';
import '../../css/c/c_i86nvgr.css';
import '../../css/m/mobllh9wk.css';
import '../../css/i/i1w0hl7az.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ibyslbbmf"/><path class="yriz58ygt"/><path class="edcck1bde"/><path class="c_i86nvgr"/><path class="mobllh9wk"/><path class="i1w0hl7az"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jwt-io"} {...others} />);
}

export default Component;
