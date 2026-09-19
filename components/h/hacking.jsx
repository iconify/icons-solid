import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f2wcktryo.css';
import '../../css/f/f_056cc9h.css';
import '../../css/i/i-qglfbjv.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="f2wcktryo"/><path class="f_056cc9h"/></g><path class="i-qglfbjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:hacking"} {...others} />);
}

export default Component;
