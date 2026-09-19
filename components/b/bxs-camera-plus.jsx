import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8fgs1blq.css';
import '../../css/t/taswdu53c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8fgs1blq"/><path class="taswdu53c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-camera-plus"} {...others} />);
}

export default Component;
