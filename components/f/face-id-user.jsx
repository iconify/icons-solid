import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mv44ndpyy.css';
import '../../css/w/w127hmxoc.css';
import '../../css/v/v7ddn7k9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mv44ndpyy"/><path class="w127hmxoc"/><path class="v7ddn7k9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:face-id-user"} {...others} />);
}

export default Component;
