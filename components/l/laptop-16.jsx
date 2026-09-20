import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3z9inily.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="s3z9inily"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:laptop-16"} {...others} />);
}

export default Component;
