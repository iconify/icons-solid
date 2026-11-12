import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/chd_4ebma.css';
import '../../css/a/affcv8b7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="chd_4ebma"/><path class="affcv8b7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:copy"} {...others} />);
}

export default Component;
