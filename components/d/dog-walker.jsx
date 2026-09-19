import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b63ho8b4l.css';
import '../../css/v/vqcm1iv2p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b63ho8b4l"/><path class="vqcm1iv2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:dog-walker"} {...others} />);
}

export default Component;
