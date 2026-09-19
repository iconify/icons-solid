import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9dw0k0wu.css';
import '../../css/c/cgvt02brm.css';
import '../../css/r/rc-mzs_am.css';
import '../../css/l/lr9yqg-sj.css';
import '../../css/q/qkuzx61vw.css';
import '../../css/f/fslfzccar.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="p9dw0k0wu"/><path class="cgvt02brm"/><path class="rc-mzs_am"/><path class="lr9yqg-sj"/><path class="qkuzx61vw"/><path class="fslfzccar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:hibernate-wordmark"} {...others} />);
}

export default Component;
