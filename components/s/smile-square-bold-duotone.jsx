import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/c/c-hky-bnv.css';
import '../../css/v/vu18-_bab.css';
import '../../css/r/r2dvf4bly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path class="c-hky-bnv"/><path class="vu18-_bab"/><path class="r2dvf4bly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smile-square-bold-duotone"} {...others} />);
}

export default Component;
