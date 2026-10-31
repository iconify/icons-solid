import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v92narh8z.css';
import '../../css/n/n_0wpi5uj.css';
import '../../css/s/st3gmcb9b.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="v92narh8z"/><path class="n_0wpi5uj"/><path class="st3gmcb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:baguette"} {...others} />);
}

export default Component;
