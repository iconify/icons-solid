import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m-24ijb3r.css';
import '../../css/d/dbu_26btw.css';
import '../../css/b/bsg406b6i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="m-24ijb3r"/><path class="dbu_26btw"/><path class="bsg406b6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:npm-lock"} {...others} />);
}

export default Component;
