import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xvcmqooya.css';
import '../../css/z/z-zny5b2y.css';
import '../../css/a/a3u5zbbys.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="xvcmqooya"/><path class="z-zny5b2y"/><path class="a3u5zbbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:python"} {...others} />);
}

export default Component;
