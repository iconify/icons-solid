import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zl0mrmb6f.css';
import '../../css/p/pa-t6xbus.css';
import '../../css/z/zbj259bhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zl0mrmb6f"/><path class="pa-t6xbus"/><path class="zbj259bhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:amazon-prime-video-logo-2"} {...others} />);
}

export default Component;
