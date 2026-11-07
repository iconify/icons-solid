import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyuvr7oih.css';
import '../../css/z/zxcwapovt.css';
import '../../css/z/zr2sxqb6e.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kyuvr7oih"/><path class="zxcwapovt"/><path class="zr2sxqb6e"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-square-outline"} {...others} />);
}

export default Component;
