import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w8cn39pfd.css';
import '../../css/m/mx3h4guvt.css';
import '../../css/u/ut42kkwkj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="w8cn39pfd"/><path clip-rule="evenodd" class="mx3h4guvt"/><path clip-rule="evenodd" class="ut42kkwkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contraceptive-injection-outline"} {...others} />);
}

export default Component;
