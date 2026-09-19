import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9snvqbfe.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="r9snvqbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:stopwatch-small-filled"} {...others} />);
}

export default Component;
