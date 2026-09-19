import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx4_2tenc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bx4_2tenc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:settings-adjust"} {...others} />);
}

export default Component;
