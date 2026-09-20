import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a8oimli_z.css';
import '../../css/a/a2l17su7b.css';
import '../../css/y/y5fthqeme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a8oimli_z"/><path class="a2l17su7b"/><path class="y5fthqeme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:network-screen-imac"} {...others} />);
}

export default Component;
