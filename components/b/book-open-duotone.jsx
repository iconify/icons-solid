import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb0ez_bdu.css';
import '../../css/j/j4olmxbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tb0ez_bdu"/><path class="j4olmxbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:book-open-duotone"} {...others} />);
}

export default Component;
