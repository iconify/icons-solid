import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ypmuh6nnm.css';
import '../../css/j/joyv6hbrv.css';
import '../../css/k/kqbernbwi.css';
import '../../css/l/luapyebft.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="ypmuh6nnm"/><path class="joyv6hbrv"/><path class="kqbernbwi"/><path class="luapyebft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:msbuild"} {...others} />);
}

export default Component;
