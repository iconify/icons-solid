import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hizqcsbyt.css';
import '../../css/x/xsfw_6dos.css';
import '../../css/y/yvtc_v5-m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hizqcsbyt"/><path class="xsfw_6dos"/><path class="yvtc_v5-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:fluxcd"} {...others} />);
}

export default Component;
