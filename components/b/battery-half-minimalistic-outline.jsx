import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maw4ikbnh.css';
import '../../css/y/yn4p-lbjx.css';
import '../../css/e/e96hvo6ly.css';
import '../../css/o/ocb7_jb-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="maw4ikbnh"/><path class="yn4p-lbjx"/><path clip-rule="evenodd" class="e96hvo6ly"/><path class="ocb7_jb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-half-minimalistic-outline"} {...others} />);
}

export default Component;
