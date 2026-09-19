import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyihokqvh.css';
import '../../css/y/yyovchb1w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gyihokqvh"/><path class="yyovchb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-right-02-filled"} {...others} />);
}

export default Component;
