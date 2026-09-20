import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j8apkbcaj.css';
import '../../css/f/fl6z1dfsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="j8apkbcaj"/><path class="fl6z1dfsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-meet-logo"} {...others} />);
}

export default Component;
