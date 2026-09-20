import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhb31c7zh.css';
import '../../css/c/cjovx-b9e.css';
import '../../css/a/an5xydbku.css';
import '../../css/z/zaaygqbyc.css';
import '../../css/z/z1myl7fek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fhb31c7zh"/><path class="cjovx-b9e"/><path class="an5xydbku"/><path class="zaaygqbyc"/><path class="z1myl7fek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monetization-touch-coin"} {...others} />);
}

export default Component;
