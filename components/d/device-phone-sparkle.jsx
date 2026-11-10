import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8ghs0mql.css';
import '../../css/z/z45xtacjv.css';
import '../../css/r/rdzg30y3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r8ghs0mql"/><path class="z45xtacjv"/><path class="rdzg30y3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-phone-sparkle"} {...others} />);
}

export default Component;
