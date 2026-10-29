import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/ltau688kd.css';
import '../../css/h/h21lvlb2e.css';
import '../../css/b/bfavq1b-g.css';
import '../../css/j/ja5oxhb_a.css';
import '../../css/k/k5cjwe53a.css';
import '../../css/u/uu-y6rqzn.css';
import '../../css/x/xkzbfq_8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ltau688kd wm-shadow"/><path class="h21lvlb2e"/><path class="bfavq1b-g"/><path class="ja5oxhb_a"/><path class="k5cjwe53a"/><path class="uu-y6rqzn wm-shine"/><path class="wm-deco xkzbfq_8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chess"} {...others} />);
}

export default Component;
