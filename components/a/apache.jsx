import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tk3tpbc4k.css';
import '../../css/d/dd4a45hkz.css';
import '../../css/k/k7x45obpf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="tk3tpbc4k"/><path class="dd4a45hkz"/><path class="k7x45obpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:apache"} {...others} />);
}

export default Component;
