import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/apbrurnes.css';
import '../../css/l/l2l3occ7y.css';
import '../../css/v/v4zxefbzz.css';
import '../../css/b/bvfdvib1w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="apbrurnes"/><path clip-rule="evenodd" class="l2l3occ7y"/><path class="v4zxefbzz"/><path clip-rule="evenodd" class="bvfdvib1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-exam-qualification-outline"} {...others} />);
}

export default Component;
