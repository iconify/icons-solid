import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/i/iycdh97rj.css';
import '../../css/u/u81geabum.css';
import '../../css/h/hdlnvh8vq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="iycdh97rj"/><path class="u81geabum"/><path class="hdlnvh8vq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:inkscape-logo"} {...others} />);
}

export default Component;
