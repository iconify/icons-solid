import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbjdh5sbc.css';
import '../../css/m/mnya4iiky.css';
import '../../css/l/lgir9oivo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cbjdh5sbc"/><path class="mnya4iiky"/><path class="lgir9oivo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:arrow-thick-up-4"} {...others} />);
}

export default Component;
