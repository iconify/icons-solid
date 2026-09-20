import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h29s4bc8i.css';
import '../../css/m/mb5862dny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h29s4bc8i"/><path class="mb5862dny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-attachment-filled"} {...others} />);
}

export default Component;
