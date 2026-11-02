import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/cr8wepbsa.css';
import '../../css/r/r56i8-b2t.css';
import '../../css/t/tqhf4up4j.css';
import '../../css/t/tkq48kbjd.css';
import '../../css/n/n_q53lprr.css';
import '../../css/g/g5zwodg6t.css';
import '../../css/j/joiff4veu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="cr8wepbsa"/><path class="r56i8-b2t"/><path class="tqhf4up4j"/><path class="tkq48kbjd"/><path class="n_q53lprr"/><path class="g5zwodg6t"/><path class="joiff4veu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:car"} {...others} />);
}

export default Component;
