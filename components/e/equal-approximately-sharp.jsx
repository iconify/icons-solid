import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct7v-bboa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ct7v-bboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:equal-approximately-sharp"} {...others} />);
}

export default Component;
