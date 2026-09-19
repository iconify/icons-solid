import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip7fo_bgm.css';
import '../../css/d/db48s2fzd.css';
import '../../css/t/trzudzbao.css';
import '../../css/r/r97ruqj2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer ip7fo_bgm"/><path class="db48s2fzd duoicon-primary-layer"/><path class="duoicon-secondary-layer trzudzbao"/><path class="duoicon-primary-layer r97ruqj2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:translation"} {...others} />);
}

export default Component;
