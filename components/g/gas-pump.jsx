import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiz9pibyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fiz9pibyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:gas-pump"} {...others} />);
}

export default Component;
