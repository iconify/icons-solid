import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erzf03bmv.css';
import '../../css/h/hll1-sbog.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="erzf03bmv"/><path class="hll1-sbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:miniflux"} {...others} />);
}

export default Component;
