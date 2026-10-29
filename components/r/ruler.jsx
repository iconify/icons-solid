import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gy3k4rbvj.css';
import '../../css/k/k9yitlb8a.css';
import '../../css/c/c286_qb6t.css';
import '../../css/u/uirldtn5m.css';
import '../../css/f/fd65gacpc.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gy3k4rbvj wm-shadow"/><path class="k9yitlb8a"/><path class="c286_qb6t"/><path class="uirldtn5m"/><path class="fd65gacpc wm-shine"/><path class="aexe23bqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:ruler"} {...others} />);
}

export default Component;
