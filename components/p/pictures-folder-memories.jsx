import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b3t24beff.css';
import '../../css/c/czce4sp6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="b3t24beff"/><path class="czce4sp6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pictures-folder-memories"} {...others} />);
}

export default Component;
