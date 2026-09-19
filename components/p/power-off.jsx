import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd1sg2zja.css';
import '../../css/z/z-px0kjof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rd1sg2zja"/><path class="z-px0kjof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:power-off"} {...others} />);
}

export default Component;
