import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wzp5fdcdn.css';
import '../../css/z/z9foj0s3t.css';
import '../../css/r/r1arkdbrf.css';
import '../../css/d/dmlvqrbvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wzp5fdcdn"/><path class="z9foj0s3t"/><path class="r1arkdbrf"/><path class="dmlvqrbvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ticket-sale-line-duotone"} {...others} />);
}

export default Component;
