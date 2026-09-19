import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1tsy5brq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="s1tsy5brq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:stop-sign-filled"} {...others} />);
}

export default Component;
