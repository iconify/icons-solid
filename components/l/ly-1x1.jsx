import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k950p1_0a.css';
import '../../css/o/ojq_ufb-f.css';
import '../../css/y/y1y13wojh.css';
import '../../css/s/s3sx6db1y.css';
import '../../css/i/ih6ul4l0l.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGER8ssbjM"><path class="k950p1_0a"/></clipPath></defs><g clip-path="url(#SVGER8ssbjM)" transform="translate(-256 -12.3)scale(1.024)"><path class="ojq_ufb-f"/><path class="y1y13wojh"/><path class="s3sx6db1y"/><path class="ih6ul4l0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ly-1x1"} {...others} />);
}

export default Component;
