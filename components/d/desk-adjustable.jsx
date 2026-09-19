import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfibukysa.css';
import '../../css/e/ei2sh0bhx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lfibukysa"/><path class="ei2sh0bhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:desk-adjustable"} {...others} />);
}

export default Component;
