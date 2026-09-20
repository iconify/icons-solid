import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y04glybhr.css';
import '../../css/q/q9ns9f5he.css';
import '../../css/v/v3uxt06nb.css';
import '../../css/c/c3zxx9bsd.css';
import '../../css/f/f4p-c0bsx.css';
import '../../css/q/qwp7-ef2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y04glybhr"/><path class="q9ns9f5he"/><path clip-rule="evenodd" class="v3uxt06nb"/><path class="c3zxx9bsd"/><path class="f4p-c0bsx"/><path clip-rule="evenodd" class="qwp7-ef2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cup-music-duotone"} {...others} />);
}

export default Component;
