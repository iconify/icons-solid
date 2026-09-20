import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ff132kbhp.css';
import '../../css/u/u2z7bt9fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ff132kbhp"/><path class="u2z7bt9fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:label-folder-tag"} {...others} />);
}

export default Component;
