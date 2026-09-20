import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e5knueb5u.css';
import '../../css/u/u6ug71b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e5knueb5u"/><path class="u6ug71b4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:type-area"} {...others} />);
}

export default Component;
