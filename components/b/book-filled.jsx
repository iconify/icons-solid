import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjq_yy5-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjq_yy5-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:book-filled"} {...others} />);
}

export default Component;
