import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zmcihobyu.css';
import '../../css/k/kk-kjccss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="zmcihobyu"/><path class="kk-kjccss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:mastodon-logo-2"} {...others} />);
}

export default Component;
