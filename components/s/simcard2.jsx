import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-zy8sb0i.css';
import '../../css/n/njwzch_ms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s-zy8sb0i"/><path class="njwzch_ms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:simcard2"} {...others} />);
}

export default Component;
