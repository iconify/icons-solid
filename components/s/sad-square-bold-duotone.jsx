import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/c/ce8u24m5f.css';
import '../../css/g/go4rm8bar.css';
import '../../css/p/pydsljbvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path class="ce8u24m5f"/><path class="go4rm8bar"/><path class="pydsljbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sad-square-bold-duotone"} {...others} />);
}

export default Component;
