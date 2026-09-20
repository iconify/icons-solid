import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kbjhs5f7m.css';
import '../../css/b/ba3q_ko_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="kbjhs5f7m"/><path class="ba3q_ko_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:evernote-logo"} {...others} />);
}

export default Component;
