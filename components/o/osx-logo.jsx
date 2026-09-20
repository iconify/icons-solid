import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-9mn0bds.css';
import '../../css/y/y0zppssaw.css';
import '../../css/q/qx7t-wzhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i-9mn0bds"/><path class="y0zppssaw"/><path class="qx7t-wzhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:osx-logo"} {...others} />);
}

export default Component;
