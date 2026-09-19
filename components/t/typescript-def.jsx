import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r29e52ykz.css';
import '../../css/k/kgx6i7brh.css';
import '../../css/m/mlnvvshov.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="r29e52ykz"/><path class="kgx6i7brh"/><path class="mlnvvshov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:typescript-def"} {...others} />);
}

export default Component;
