import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-0a_5-7a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v-0a_5-7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:pause-circle-fill"} {...others} />);
}

export default Component;
