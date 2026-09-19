import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnlnjbcmb.css';
import '../../css/o/ozxr3zrwe.css';
import '../../css/j/j-_c-dbxp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mnlnjbcmb"/><path class="ozxr3zrwe"/><path class="j-_c-dbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:save-series"} {...others} />);
}

export default Component;
