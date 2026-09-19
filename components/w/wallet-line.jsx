import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3ny5kbwg.css';
import '../../css/d/dwgdao0sa.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="c3ny5kbwg clr-i-outline clr-i-outline-path-1"/><circle class="clr-i-outline clr-i-outline-path-2 dwgdao0sa"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:wallet-line"} {...others} />);
}

export default Component;
