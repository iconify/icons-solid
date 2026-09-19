import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8dcjwbei.css';
import '../../css/d/di5phmx8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b x8dcjwbei"/><path class="b di5phmx8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera-alt-filled"} {...others} />);
}

export default Component;
