import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y0c4i_bfy.css';
import '../../css/a/a6hbzh8hq.css';
import '../../css/t/ta4qzbpzj.css';
import '../../css/i/i0uvhkbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y0c4i_bfy"/><path clip-rule="evenodd" class="a6hbzh8hq"/><path class="ta4qzbpzj"/><path clip-rule="evenodd" class="i0uvhkbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:laptop-camera-flat"} {...others} />);
}

export default Component;
