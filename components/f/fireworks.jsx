import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eas391big.css';
import '../../css/y/y9pme5b7n.css';
import '../../css/g/gtv82xhfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eas391big"/><path class="y9pme5b7n"/><path class="gtv82xhfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fireworks"} {...others} />);
}

export default Component;
