import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-ky4acxk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-ky4acxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:key-round-solid"} {...others} />);
}

export default Component;
