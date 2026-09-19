import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlakeub9c.css';
import '../../css/c/c_uyv2bcx.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="mlakeub9c"/><path class="c_uyv2bcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:whitesunbehindcloud"} {...others} />);
}

export default Component;
