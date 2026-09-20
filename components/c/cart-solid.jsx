import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw20fcbyu.css';
import '../../css/d/ds8m3ccms.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kw20fcbyu"/><path clip-rule="evenodd" class="ds8m3ccms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:cart-solid"} {...others} />);
}

export default Component;
