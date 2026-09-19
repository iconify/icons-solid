import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd_rk-b_e.css';
import '../../css/g/ggn80i4hk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hd_rk-b_e"/><path class="ggn80i4hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:link"} {...others} />);
}

export default Component;
