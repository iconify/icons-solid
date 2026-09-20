import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4jpg3bos.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4jpg3bos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:select-multiple-solid"} {...others} />);
}

export default Component;
