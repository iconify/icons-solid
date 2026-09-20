import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfm4-3b6w.css';
import '../../css/e/es9h9dxow.css';
import '../../css/b/b8w7fnbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfm4-3b6w"/><path class="es9h9dxow"/><path class="b8w7fnbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:dashboard-browser-gauge"} {...others} />);
}

export default Component;
