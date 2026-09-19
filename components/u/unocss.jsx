import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dc3y81tcn.css';
import '../../css/x/xx1c4jb9g.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="dc3y81tcn"/><path class="xx1c4jb9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:unocss"} {...others} />);
}

export default Component;
