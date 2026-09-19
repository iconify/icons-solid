import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kymg-qb4w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kymg-qb4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:camera-video-fill"} {...others} />);
}

export default Component;
