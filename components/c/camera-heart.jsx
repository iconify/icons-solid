import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytfd0j2fs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytfd0j2fs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:camera-heart"} {...others} />);
}

export default Component;
