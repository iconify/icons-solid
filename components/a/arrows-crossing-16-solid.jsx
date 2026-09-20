import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyrw1ub6k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lyrw1ub6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrows-crossing-16-solid"} {...others} />);
}

export default Component;
