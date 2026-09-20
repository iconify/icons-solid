import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/ko4okmb8h.css';
import '../../css/z/zu_k2vzqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ko4okmb8h"/><path class="zu_k2vzqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:twitch-logo"} {...others} />);
}

export default Component;
