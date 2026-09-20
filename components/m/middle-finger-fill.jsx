import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms2x3t45m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ms2x3t45m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:middle-finger-fill"} {...others} />);
}

export default Component;
