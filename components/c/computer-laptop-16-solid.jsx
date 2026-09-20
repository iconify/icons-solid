import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9-2tcckm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r9-2tcckm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:computer-laptop-16-solid"} {...others} />);
}

export default Component;
