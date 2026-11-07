import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqeyqsb0i.css';
import '../../css/n/nn7oqiafx.css';
import '../../css/v/vfk2nmbnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kqeyqsb0i"/><path class="nn7oqiafx"/><path clip-rule="evenodd" class="vfk2nmbnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-minimalistic-bold"} {...others} />);
}

export default Component;
