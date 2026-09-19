import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwhb--87a.css';
import '../../css/b/bbbbm0bzn.css';
import '../../css/w/wy1t15iak.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qwhb--87a"/><path clip-rule="evenodd" class="bbbbm0bzn"/><path class="wy1t15iak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:heart-hands"} {...others} />);
}

export default Component;
