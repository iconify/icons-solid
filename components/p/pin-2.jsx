import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3uwuyday.css';
import '../../css/y/yvhrvk0ds.css';
import '../../css/h/h935y7bwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j3uwuyday"/><path class="yvhrvk0ds"/><path class="h935y7bwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:pin-2"} {...others} />);
}

export default Component;
