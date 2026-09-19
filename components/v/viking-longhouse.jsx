import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd9adw1-a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rd9adw1-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:viking-longhouse"} {...others} />);
}

export default Component;
