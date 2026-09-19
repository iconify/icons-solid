import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-l5kbc7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w-l5kbc7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:guarded-tower"} {...others} />);
}

export default Component;
