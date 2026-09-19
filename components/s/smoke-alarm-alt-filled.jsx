import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fduuw1b8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fduuw1b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:smoke-alarm-alt-filled"} {...others} />);
}

export default Component;
