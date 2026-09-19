import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtn5odbvy.css';
import '../../css/b/brskaivxf.css';
import '../../css/e/e7ssxkvyx.css';
import '../../css/k/kabzyy02x.css';
import '../../css/w/wd4k0dczr.css';
import '../../css/g/gzcl4lb8w.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 jtn5odbvy"/><circle class="brskaivxf clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 e7ssxkvyx"/><path class="clr-i-solid clr-i-solid-path-4 kabzyy02x"/><path class="clr-i-solid clr-i-solid-path-5 wd4k0dczr"/><path class="clr-i-solid clr-i-solid-path-6 gzcl4lb8w"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:campervan-solid"} {...others} />);
}

export default Component;
