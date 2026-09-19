import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clcsdocbl.css';
import '../../css/i/i7v4jn80w.css';
import '../../css/y/yzu76tbsx.css';
import '../../css/l/lm4-4zbuu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clcsdocbl clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 i7v4jn80w"/><path class="clr-i-solid clr-i-solid-path-3 yzu76tbsx"/><path class="clr-i-solid clr-i-solid-path-4 lm4-4zbuu"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:alarm-off-solid"} {...others} />);
}

export default Component;
