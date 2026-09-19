import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vge-i4geh.css';
import '../../css/z/zy5ikon0a.css';
import '../../css/n/nubckybqb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="vge-i4geh"/><path class="zy5ikon0a"/><path class="nubckybqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:diff"} {...others} />);
}

export default Component;
