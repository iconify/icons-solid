import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/z-jtuebun.css';
import '../../css/z/zmsmhxb7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="z-jtuebun"/><path class="zmsmhxb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:block-outline"} {...others} />);
}

export default Component;
