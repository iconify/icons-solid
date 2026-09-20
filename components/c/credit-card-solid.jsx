import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxlczvqqd.css';
import '../../css/m/m8_h6-bpz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pxlczvqqd"/><path clip-rule="evenodd" class="m8_h6-bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:credit-card-solid"} {...others} />);
}

export default Component;
