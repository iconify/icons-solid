import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x8exgwwud.css';
import '../../css/z/zvk0bob7z.css';
import '../../css/e/eyi-2nbur.css';
import '../../css/r/rsu5nla_g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="x8exgwwud"/><path clip-rule="evenodd" class="zvk0bob7z"/><path class="eyi-2nbur"/><path class="rsu5nla_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:clean-broom-wipe"} {...others} />);
}

export default Component;
