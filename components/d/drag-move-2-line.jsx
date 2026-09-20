import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt-eicc_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qt-eicc_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:drag-move-2-line"} {...others} />);
}

export default Component;
