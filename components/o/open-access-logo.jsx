import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lll-uetsu.css';
import '../../css/o/ovjw8ab9k.css';
import '../../css/i/ibejhacsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="lll-uetsu"/><path class="ovjw8ab9k"/><path class="ibejhacsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:open-access-logo"} {...others} />);
}

export default Component;
