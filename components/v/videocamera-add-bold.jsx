import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-qt_m0ff.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n-qt_m0ff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:videocamera-add-bold"} {...others} />);
}

export default Component;
