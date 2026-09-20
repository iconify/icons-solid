import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6zx3ebxq.css';
import '../../css/m/m6dwiobbl.css';
import '../../css/h/hg6_p9-hq.css';
import '../../css/x/xklvz3brh.css';
import '../../css/x/xayimbzzp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k6zx3ebxq"/><path class="m6dwiobbl"/><path class="hg6_p9-hq"/><path class="xklvz3brh"/><path class="xayimbzzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:windows-retro"} {...others} />);
}

export default Component;
