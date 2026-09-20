import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dx9pka8qs.css';
import '../../css/d/d1k3_cc9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dx9pka8qs"/><path clip-rule="evenodd" class="d1k3_cc9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:shop-fill"} {...others} />);
}

export default Component;
