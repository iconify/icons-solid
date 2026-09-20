import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1u3qk9bj.css';
import '../../css/a/a4ppuf7an.css';
import '../../css/j/j99jrbj5x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m1u3qk9bj"/><path class="a4ppuf7an"/><path clip-rule="evenodd" class="j99jrbj5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:balloon-flat"} {...others} />);
}

export default Component;
