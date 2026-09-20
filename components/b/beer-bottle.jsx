import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngcgd2iee.css';
import '../../css/v/v6vq9_plg.css';
import '../../css/d/d6q_nhg2h.css';
import '../../css/q/qexw_fbun.css';
import '../../css/q/qsc6mpb6x.css';
import '../../css/r/ritw49rcc.css';
import '../../css/l/l4mi_4bmg.css';
import '../../css/b/b1cqkebjy.css';
import '../../css/a/a_tv8abqd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ngcgd2iee"/><path class="v6vq9_plg"/><path class="d6q_nhg2h"/><path class="qexw_fbun"/><path class="qsc6mpb6x"/><path class="ritw49rcc"/><path class="l4mi_4bmg"/><path class="b1cqkebjy"/><path class="a_tv8abqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:beer-bottle"} {...others} />);
}

export default Component;
