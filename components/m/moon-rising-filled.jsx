import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6i3jx7ty.css';
import '../../css/c/c88l3cbkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6i3jx7ty"/><path class="c88l3cbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:moon-rising-filled"} {...others} />);
}

export default Component;
