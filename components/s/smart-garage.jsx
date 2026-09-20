import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7fx23bpd.css';
import '../../css/j/j2hakr1af.css';
import '../../css/a/a6amy2xrm.css';
import '../../css/x/xxewlcc9j.css';
import '../../css/f/f6u9o_bic.css';
import '../../css/z/zvyfj6b0a.css';
import '../../css/i/iu4na9bmi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r7fx23bpd"/><path class="j2hakr1af"/><path class="a6amy2xrm"/><path class="xxewlcc9j"/><path class="f6u9o_bic"/><path class="zvyfj6b0a"/><circle class="iu4na9bmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:smart-garage"} {...others} />);
}

export default Component;
