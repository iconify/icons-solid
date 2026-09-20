import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg077n2gk.css';
import '../../css/x/x-27xdb1j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qg077n2gk"/><path clip-rule="evenodd" class="x-27xdb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-identifier-card-flat"} {...others} />);
}

export default Component;
