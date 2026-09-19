import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufi4okb0l.css';
import '../../css/k/k0z7a6b-h.css';
import '../../css/t/tcbb08bkr.css';
import '../../css/e/e8fs2zb1o.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 ufi4okb0l"/><path class="clr-i-outline clr-i-outline-path-2 k0z7a6b-h"/><path class="clr-i-outline clr-i-outline-path-3 tcbb08bkr"/><path class="clr-i-outline clr-i-outline-path-4 e8fs2zb1o"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:application-line"} {...others} />);
}

export default Component;
