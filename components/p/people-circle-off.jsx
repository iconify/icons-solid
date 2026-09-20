import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tn-v_jagy.css';
import '../../css/s/swlkb3bbi.css';
import '../../css/u/uoyt364kf.css';
import '../../css/q/qvrvgyy2t.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tn-v_jagy"/><path clip-rule="evenodd" class="swlkb3bbi"/><path clip-rule="evenodd" class="uoyt364kf"/><path clip-rule="evenodd" class="qvrvgyy2t"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:people-circle-off"} {...others} />);
}

export default Component;
