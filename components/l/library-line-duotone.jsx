import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea_31gbnm.css';
import '../../css/j/j8_7y3biq.css';
import '../../css/v/vnsop5_4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ea_31gbnm"/><path class="j8_7y3biq"/><path class="vnsop5_4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:library-line-duotone"} {...others} />);
}

export default Component;
