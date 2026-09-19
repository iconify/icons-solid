import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dbm-q69tj.css';
import '../../css/n/n2vaf58fj.css';
import '../../css/r/r-o2b4qju.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="dbm-q69tj"/><path class="n2vaf58fj"/><path class="r-o2b4qju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:lua-check"} {...others} />);
}

export default Component;
