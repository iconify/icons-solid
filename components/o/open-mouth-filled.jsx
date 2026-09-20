import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/typ9t6dud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="typ9t6dud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:open-mouth-filled"} {...others} />);
}

export default Component;
