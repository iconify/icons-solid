import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4rcjllvc.css';
import '../../css/a/at6ugtb4z.css';
import '../../css/w/w0u2m3b8v.css';
import '../../css/d/dylnbb19p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="b4rcjllvc"/><path class="at6ugtb4z"/><path class="w0u2m3b8v"/><path clip-rule="evenodd" class="dylnbb19p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:suitcase-rolling-flat"} {...others} />);
}

export default Component;
