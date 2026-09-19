import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzpmrsbbt.css';
import '../../css/y/yg_pakoyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kzpmrsbbt"/><path class="yg_pakoyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-octocat"} {...others} />);
}

export default Component;
