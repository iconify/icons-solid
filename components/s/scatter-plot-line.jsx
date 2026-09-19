import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdxbmxx-r.css';
import '../../css/s/s2jvy2blx.css';
import '../../css/g/gs0aklbvc.css';
import '../../css/j/jyuuws0ht.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 tdxbmxx-r"/><path class="clr-i-outline clr-i-outline-path-2 s2jvy2blx"/><path class="clr-i-outline clr-i-outline-path-3 gs0aklbvc"/><path class="clr-i-outline clr-i-outline-path-4 jyuuws0ht"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:scatter-plot-line"} {...others} />);
}

export default Component;
