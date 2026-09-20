import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6hf64byk.css';
import '../../css/q/qvco7xbbz.css';
import '../../css/h/h9uoaqcaq.css';
import '../../css/h/h_pt1abna.css';
import '../../css/r/rln46_bex.css';
import '../../css/s/s7-yi3b5z.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="v6hf64byk"><path class="qvco7xbbz"/><path class="h9uoaqcaq"/></g><path class="h_pt1abna"/><path class="rln46_bex"/><path class="s7-yi3b5z"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:scorpio"} {...others} />);
}

export default Component;
