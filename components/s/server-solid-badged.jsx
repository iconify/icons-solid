import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq05nq90x.css';
import '../../css/i/it0_k2res.css';
import '../../css/o/oj7rrcccj.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid--badged clr-i-solid-path-1--badged kq05nq90x"/><circle class="clr-i-solid--badged clr-i-solid-path-2--badged it0_k2res"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-3--badged oj7rrcccj"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:server-solid-badged"} {...others} />);
}

export default Component;
