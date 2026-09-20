import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivnme8fnn.css';
import '../../css/n/n3zf9obkq.css';
import '../../css/c/c20im5hsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ivnme8fnn"/><path class="n3zf9obkq"/><path class="c20im5hsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:toggle-off-duotone"} {...others} />);
}

export default Component;
