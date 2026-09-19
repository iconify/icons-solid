import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9rvd81wa.css';
import '../../css/c/cma_f2b5f.css';
import '../../css/y/ynhzdvlil.css';
import '../../css/z/z11n7ab_d.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 z9rvd81wa"/><path class="clr-i-solid clr-i-solid-path-2 cma_f2b5f"/><path class="clr-i-solid clr-i-solid-path-3 ynhzdvlil"/><path class="clr-i-solid clr-i-solid-path-4 z11n7ab_d"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:beta-solid"} {...others} />);
}

export default Component;
