import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e323ptq2s.css';
import '../../css/u/uljk9hwts.css';
import '../../css/u/uxlyiobxx.css';
import '../../css/n/npyflccik.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 e323ptq2s"/><path class="clr-i-outline clr-i-outline-path-2 uljk9hwts"/><path class="clr-i-outline clr-i-outline-path-3 uxlyiobxx"/><path class="clr-i-outline clr-i-outline-path-4 npyflccik"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:server-line"} {...others} />);
}

export default Component;
