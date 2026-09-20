import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0_wgyb4o.css';
import '../../css/t/tpvreibwc.css';

const viewBox = {"width":256,"height":268};
const content = `<path class="m0_wgyb4o"/><path class="tpvreibwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:notion"} {...others} />);
}

export default Component;
