import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcfaj0bdj.css';
import '../../css/c/c7b0ob2tk.css';
import '../../css/r/rcidtuiap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pcfaj0bdj"/><path class="c7b0ob2tk"/><path class="rcidtuiap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:dashboard-duotone"} {...others} />);
}

export default Component;
