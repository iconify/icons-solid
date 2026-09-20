import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/murc87bcv.css';
import '../../css/x/x0gfa0b7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="murc87bcv"/><path class="x0gfa0b7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-ring-filled"} {...others} />);
}

export default Component;
