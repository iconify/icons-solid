import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/z31s4fm-k.css';
import '../../css/r/rj1d1b0ha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="z31s4fm-k"/><path class="rj1d1b0ha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:byte-logo"} {...others} />);
}

export default Component;
