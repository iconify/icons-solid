import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mny6kj1pr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mny6kj1pr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:tactile-paving-x-5"} {...others} />);
}

export default Component;
