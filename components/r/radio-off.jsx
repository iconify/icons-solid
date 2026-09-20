import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avn7-_bug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="avn7-_bug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:radio-off"} {...others} />);
}

export default Component;
