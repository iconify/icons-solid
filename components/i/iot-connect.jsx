import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gac48jb7z.css';
import '../../css/b/butntgbln.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gac48jb7z"/><path class="butntgbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:iot-connect"} {...others} />);
}

export default Component;
