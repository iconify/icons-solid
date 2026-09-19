import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akk2_7fox.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="akk2_7fox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:wikipedia"} {...others} />);
}

export default Component;
