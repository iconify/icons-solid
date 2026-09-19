import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tc7hgrb-z.css';
import '../../css/m/m90xkws6k.css';
import '../../css/a/an1oj5iwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tc7hgrb-z"/><path class="m90xkws6k"/><path class="an1oj5iwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-account-02"} {...others} />);
}

export default Component;
