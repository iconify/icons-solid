import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckgc292ug.css';
import '../../css/w/w4qvkpqyc.css';
import '../../css/q/q0me2xbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ckgc292ug"/><path class="w4qvkpqyc"/><path clip-rule="evenodd" class="q0me2xbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:laptop-project-screen-flat"} {...others} />);
}

export default Component;
