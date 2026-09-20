import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyqummz7x.css';
import '../../css/v/vrdu_bw7d.css';
import '../../css/n/nvv52mt8n.css';
import '../../css/s/sv8ob1bnt.css';
import '../../css/f/f-kkyhb_l.css';
import '../../css/p/pqnz3d3uu.css';
import '../../css/b/b17nycw8v.css';
import '../../css/h/hyuq26bdl.css';
import '../../css/q/qf-xp0bvd.css';
import '../../css/u/u26tg2bai.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tyqummz7x"/><path class="vrdu_bw7d"/><path class="nvv52mt8n"/><path class="sv8ob1bnt"/><path class="f-kkyhb_l"/><path class="pqnz3d3uu"/><path class="b17nycw8v"/><circle class="hyuq26bdl"/><circle class="qf-xp0bvd"/><path class="u26tg2bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:grinning-cat"} {...others} />);
}

export default Component;
