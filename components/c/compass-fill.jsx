import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyr5jws7y.css';
import '../../css/r/rf4ztnb7f.css';
import '../../css/d/d4bfwebii.css';
import '../../css/l/l61b8p6hi.css';
import '../../css/b/b8z5cxbaq.css';
import '../../css/o/ojd164b-w.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><linearGradient id="SVGoyidRdFK" x1="184" x2="328" y1="131.3" y2="380.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="jyr5jws7y"/><stop offset=".5" class="jyr5jws7y"/><stop offset="1" class="rf4ztnb7f"/></linearGradient></defs><circle fill="url(#SVGoyidRdFK)" class="d4bfwebii"/><path class="l61b8p6hi"/><g><path class="b8z5cxbaq"/><path class="ojd164b-w"/><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="2s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 256 256; 6 256 256; -6 256 256"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:compass-fill"} {...others} />);
}

export default Component;
