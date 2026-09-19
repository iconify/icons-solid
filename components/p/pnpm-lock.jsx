import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m-24ijb3r.css';
import '../../css/l/l51cgrbhp.css';
import '../../css/k/kk3mezben.css';
import '../../css/o/o35zsh07e.css';
import '../../css/p/pxofu-yal.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="m-24ijb3r"/><path class="l51cgrbhp"/><path class="kk3mezben"/><path class="o35zsh07e"/><path class="pxofu-yal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:pnpm-lock"} {...others} />);
}

export default Component;
