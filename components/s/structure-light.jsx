import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/ick-u-p3c.css';
import '../../css/h/hgfcm3hgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="ick-u-p3c"/><path class="hgfcm3hgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:structure-light"} {...others} />);
}

export default Component;
