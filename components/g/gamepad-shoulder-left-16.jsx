import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aieknlrza.css';
import '../../css/p/p-1znlk9v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aieknlrza"/><path clip-rule="evenodd" class="p-1znlk9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gamepad-shoulder-left-16"} {...others} />);
}

export default Component;
