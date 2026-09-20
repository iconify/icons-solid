import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zbqrs_s9f.css';
import '../../css/a/acepfybqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zbqrs_s9f"/><path class="acepfybqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:youtube-gaming-logo-3"} {...others} />);
}

export default Component;
