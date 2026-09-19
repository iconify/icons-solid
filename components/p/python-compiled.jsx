import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q2cbt3b-c.css';
import '../../css/x/x_er3gb5y.css';
import '../../css/g/gsr5-p44z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="q2cbt3b-c"/><path class="x_er3gb5y"/><path class="gsr5-p44z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:python-compiled"} {...others} />);
}

export default Component;
