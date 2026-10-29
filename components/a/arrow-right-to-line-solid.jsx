import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrcg_m-ru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrcg_m-ru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-right-to-line-solid"} {...others} />);
}

export default Component;
