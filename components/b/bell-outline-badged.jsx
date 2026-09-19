import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsx2n78yf.css';
import '../../css/n/n-7eab0te.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline--badged clr-i-outline-path-1--badged gsx2n78yf"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged n-7eab0te"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-1--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:bell-outline-badged"} {...others} />);
}

export default Component;
