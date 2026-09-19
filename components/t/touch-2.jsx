import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrp9thb_f.css';
import '../../css/y/yewmc_bur.css';
import '../../css/h/hvsnt-1bk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lrp9thb_f"/><path class="yewmc_bur"/><path class="hvsnt-1bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:touch-2"} {...others} />);
}

export default Component;
