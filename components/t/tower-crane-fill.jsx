import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec6h5ubjk.css';
import '../../css/c/cyglm8gxk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ec6h5ubjk"/><path class="cyglm8gxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:tower-crane-fill"} {...others} />);
}

export default Component;
