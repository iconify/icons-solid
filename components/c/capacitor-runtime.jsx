import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf562yesk.css';
import '../../css/c/cnej8nbnf.css';
import '../../css/g/gkd3fq_9k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gf562yesk"/><path class="cnej8nbnf"/><path class="gkd3fq_9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:capacitor-runtime"} {...others} />);
}

export default Component;
