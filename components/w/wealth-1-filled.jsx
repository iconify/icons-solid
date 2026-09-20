import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad3rgxbvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ad3rgxbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:wealth-1-filled"} {...others} />);
}

export default Component;
