import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk7f4xtii.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="yk7f4xtii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:drum-with-drumsticks"} {...others} />);
}

export default Component;
