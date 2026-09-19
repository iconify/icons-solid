import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi-gm2nxq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hi-gm2nxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:view-off-filled"} {...others} />);
}

export default Component;
