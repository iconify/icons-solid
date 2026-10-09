import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_3g6zbib.css';
import '../../css/n/nin37acqn.css';
import '../../css/y/y6gb_wbfk.css';
import '../../css/y/yrp93bbsv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e_3g6zbib"/><path class="nin37acqn"/><path class="y6gb_wbfk"/><path class="yrp93bbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mic-20"} {...others} />);
}

export default Component;
