import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwrb__blp.css';
import '../../css/h/hzh_8obcm.css';
import '../../css/w/w77hsxbyo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pwrb__blp"/><path class="hzh_8obcm"/><path class="w77hsxbyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:castle-48"} {...others} />);
}

export default Component;
