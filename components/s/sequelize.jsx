import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fok_zpiyp.css';
import '../../css/s/s158w_llm.css';
import '../../css/z/z92_w6b5g.css';
import '../../css/v/v0cqpnw_k.css';
import '../../css/j/jq17pkb9u.css';
import '../../css/c/crb1lm4it.css';
import '../../css/k/k6bg5rdex.css';
import '../../css/v/vck0xh_4t.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="fok_zpiyp"/><path class="s158w_llm"/><path class="z92_w6b5g"/><path class="v0cqpnw_k"/><path class="jq17pkb9u"/><path class="crb1lm4it"/><path class="k6bg5rdex"/><path class="vck0xh_4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:sequelize"} {...others} />);
}

export default Component;
