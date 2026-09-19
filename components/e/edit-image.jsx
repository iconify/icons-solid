import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1vkd8a2k.css';
import '../../css/e/eg53tfboc.css';
import '../../css/p/pvwubie-t.css';
import '../../css/f/furrw-3gr.css';
import '../../css/b/babcc_b1q.css';
import '../../css/n/n9w4gfuua.css';
import '../../css/z/z1g-8tbcx.css';
import '../../css/s/sm619n-0z.css';
import '../../css/h/h6slu0bxi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x1vkd8a2k"/><circle class="eg53tfboc"/><path class="pvwubie-t"/><path class="furrw-3gr"/><path class="babcc_b1q"/><path class="n9w4gfuua"/><path class="z1g-8tbcx"/><path class="sm619n-0z"/><path class="h6slu0bxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:edit-image"} {...others} />);
}

export default Component;
