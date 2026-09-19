import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq7e5gbnl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vq7e5gbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-arrow-down-fill"} {...others} />);
}

export default Component;
