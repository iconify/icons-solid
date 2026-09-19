import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jdez2hb1n.css';
import '../../css/s/sh1lptb3y.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="jdez2hb1n"/><path class="sh1lptb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:twine"} {...others} />);
}

export default Component;
