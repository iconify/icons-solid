import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxz1d9zdu.css';
import '../../css/n/nf61udb6z.css';
import '../../css/t/t-y-wfbey.css';
import '../../css/a/aufd3gbbo.css';
import '../../css/s/sn56facnf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gxz1d9zdu"/><path class="nf61udb6z"/><path class="t-y-wfbey"/><path class="aufd3gbbo"/><path class="sn56facnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:deployment"} {...others} />);
}

export default Component;
