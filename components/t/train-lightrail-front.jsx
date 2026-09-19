import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qasfav3td.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qasfav3td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:train-lightrail-front"} {...others} />);
}

export default Component;
