import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdx__9a1f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bdx__9a1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-merge-left-filled"} {...others} />);
}

export default Component;
