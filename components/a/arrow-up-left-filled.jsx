import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr5v-mbai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lr5v-mbai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-up-left-filled"} {...others} />);
}

export default Component;
