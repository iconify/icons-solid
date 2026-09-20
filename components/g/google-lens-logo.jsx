import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p66qvaczk.css';
import '../../css/u/uavvujbes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="p66qvaczk"/><path clip-rule="evenodd" class="uavvujbes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-lens-logo"} {...others} />);
}

export default Component;
