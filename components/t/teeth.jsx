import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/c8p3g3byb.css';
import '../../css/a/acjzmsjdx.css';
import '../../css/p/pvmqixbkk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="c8p3g3byb"/><path class="acjzmsjdx"/><path class="pvmqixbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:teeth"} {...others} />);
}

export default Component;
