import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjr5vrb5k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vjr5vrb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:moon-bats"} {...others} />);
}

export default Component;
