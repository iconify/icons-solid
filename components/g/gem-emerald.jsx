import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urt65zqpz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="urt65zqpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:gem-emerald"} {...others} />);
}

export default Component;
