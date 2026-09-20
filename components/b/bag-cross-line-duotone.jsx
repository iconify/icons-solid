import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o4ffp8zxl.css';
import '../../css/c/c61s3zttl.css';
import '../../css/m/mw42pob4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o4ffp8zxl"/><path class="c61s3zttl"/><path class="mw42pob4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-cross-line-duotone"} {...others} />);
}

export default Component;
