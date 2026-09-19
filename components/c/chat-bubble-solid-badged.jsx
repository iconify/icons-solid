import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goq69mcov.css';
import '../../css/l/lk3m7pk_h.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid--badged clr-i-solid-path-1--badged goq69mcov"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-2--badged lk3m7pk_h"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:chat-bubble-solid-badged"} {...others} />);
}

export default Component;
