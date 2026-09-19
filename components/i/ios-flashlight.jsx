import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmw38b5pn.css';
import '../../css/z/zse_r2bij.css';
import '../../css/c/cs-uxhb8w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bmw38b5pn"/><path class="zse_r2bij"/><circle class="cs-uxhb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-flashlight"} {...others} />);
}

export default Component;
