import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sem2f4bwj.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="sem2f4bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:right-then-curving-up-arrow-small-filled"} {...others} />);
}

export default Component;
