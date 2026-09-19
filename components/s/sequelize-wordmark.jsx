import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gatow9udm.css';
import '../../css/p/pgsldrbkm.css';
import '../../css/l/ljz9zn_qs.css';
import '../../css/m/mj3td6bch.css';
import '../../css/v/v2vvi1b-y.css';
import '../../css/c/c7dzhgb3v.css';
import '../../css/g/glnrqrbrf.css';
import '../../css/c/clla1txqq.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="gatow9udm"/><path class="pgsldrbkm"/><path class="ljz9zn_qs"/><path class="mj3td6bch"/><path class="v2vvi1b-y"/><path class="c7dzhgb3v"/><path class="glnrqrbrf"/><path class="clla1txqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:sequelize-wordmark"} {...others} />);
}

export default Component;
