import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtjjt6bok.css';
import '../../css/v/v-e0rbmkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jtjjt6bok"/><path class="v-e0rbmkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scissors-bold-duotone"} {...others} />);
}

export default Component;
