import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z8bxujbug.css';
import '../../css/m/mj-7rwx4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="z8bxujbug"/><path class="mj-7rwx4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:drum-stick"} {...others} />);
}

export default Component;
