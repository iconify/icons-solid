import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbz73rbno.css';
import '../../css/w/wem3j3bqk.css';
import '../../css/j/jk6gj8b-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fbz73rbno"/><path class="wem3j3bqk"/><path class="jk6gj8b-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:apple-2"} {...others} />);
}

export default Component;
