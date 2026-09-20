import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcpsqhugb.css';
import '../../css/a/aam2fvvmq.css';
import '../../css/a/a4qx-pbpg.css';
import '../../css/s/sa4g-bcem.css';
import '../../css/e/e5zpxbblo.css';
import '../../css/y/y_gbvx9oo.css';
import '../../css/x/x6nlcebdp.css';
import '../../css/r/rgf_8mkft.css';
import '../../css/h/hrhbzf30b.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="rcpsqhugb"/><g class="aam2fvvmq"><path clip-rule="evenodd" class="a4qx-pbpg"/><path class="sa4g-bcem"/></g><path clip-rule="evenodd" class="e5zpxbblo"/><path class="y_gbvx9oo"/><path class="x6nlcebdp"/><path class="rgf_8mkft"/><path class="hrhbzf30b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:milk-jug"} {...others} />);
}

export default Component;
