import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iql4axbme.css';
import '../../css/n/nd6bc6b-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGwDJxaeOQ)"><path class="iql4axbme"/></g><defs><clipPath id="SVGwDJxaeOQ"><path class="nd6bc6b-x"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:star-fill"} {...others} />);
}

export default Component;
