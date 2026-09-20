import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8up9o8ge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8up9o8ge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:key-skeleton"} {...others} />);
}

export default Component;
