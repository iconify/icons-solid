import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4plqmbyz.css';
import '../../css/z/zfukoz0sr.css';
import '../../css/t/ty52ykbzz.css';
import '../../css/v/vqhaxew3u.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="w4plqmbyz"/><path class="zfukoz0sr"/><circle class="ty52ykbzz"/><path class="vqhaxew3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:unlock"} {...others} />);
}

export default Component;
