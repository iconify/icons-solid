import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfuwwhbkc.css';
import '../../css/c/c82mu65xq.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="lfuwwhbkc"/><path class="c82mu65xq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:anesthesia"} {...others} />);
}

export default Component;
