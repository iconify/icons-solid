import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/oerw1zbhw.css';
import '../../css/w/wetd3dbuh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="oerw1zbhw"/><path class="wetd3dbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:commitlint"} {...others} />);
}

export default Component;
