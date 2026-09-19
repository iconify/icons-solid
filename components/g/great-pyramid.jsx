import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ripyr9y3s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ripyr9y3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:great-pyramid"} {...others} />);
}

export default Component;
