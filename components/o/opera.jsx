import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5eussbda.css';
import '../../css/e/e6n3rcb6j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q5eussbda"/><path class="e6n3rcb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:opera"} {...others} />);
}

export default Component;
