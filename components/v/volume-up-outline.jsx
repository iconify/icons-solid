import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnhzr4bxv.css';
import '../../css/v/va9ag7bgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fnhzr4bxv"/><path class="va9ag7bgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:volume-up-outline"} {...others} />);
}

export default Component;
