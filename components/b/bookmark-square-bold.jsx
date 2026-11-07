import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8eri-m2c.css';
import '../../css/c/c2xn2qjho.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h8eri-m2c"/><path class="c2xn2qjho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-square-bold"} {...others} />);
}

export default Component;
