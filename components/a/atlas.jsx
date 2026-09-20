import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8lx0vbrj.css';
import '../../css/v/vy0ldfbhv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8lx0vbrj"/><path class="vy0ldfbhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:atlas"} {...others} />);
}

export default Component;
