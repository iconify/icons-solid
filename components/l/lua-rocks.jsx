import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xb1ai900p.css';
import '../../css/r/r8vvjsboo.css';
import '../../css/h/hd21vcc-n.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="xb1ai900p"/><path class="r8vvjsboo"/></g><path class="hd21vcc-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:lua-rocks"} {...others} />);
}

export default Component;
