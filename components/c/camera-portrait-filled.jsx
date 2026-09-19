import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm6zd0yms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lm6zd0yms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camera-portrait-filled"} {...others} />);
}

export default Component;
