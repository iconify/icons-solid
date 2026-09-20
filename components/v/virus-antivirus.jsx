import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sikv4to3k.css';
import '../../css/x/x9yv1kb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sikv4to3k"/><path class="x9yv1kb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:virus-antivirus"} {...others} />);
}

export default Component;
