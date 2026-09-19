import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci-bfktii.css';
import '../../css/j/j01m1nbtv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ci-bfktii"/><path class="j01m1nbtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:tsq"} {...others} />);
}

export default Component;
