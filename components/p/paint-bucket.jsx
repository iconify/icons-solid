import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv6yotz8k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cv6yotz8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:paint-bucket"} {...others} />);
}

export default Component;
