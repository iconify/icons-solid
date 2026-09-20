import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vb8udxb0c.css';
import '../../css/g/gxpq89blg.css';
import '../../css/m/mse88bcix.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vb8udxb0c"/><path clip-rule="evenodd" class="gxpq89blg"/><path class="mse88bcix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:programming-flowchart"} {...others} />);
}

export default Component;
