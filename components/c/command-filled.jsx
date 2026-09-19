import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-sd6dlux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-sd6dlux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:command-filled"} {...others} />);
}

export default Component;
