import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nlnol9hhk.css';
import '../../css/z/zx2_eugjs.css';
import '../../css/e/e41hsswqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nlnol9hhk"/><circle class="zx2_eugjs"/><path class="e41hsswqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-minus-01"} {...others} />);
}

export default Component;
