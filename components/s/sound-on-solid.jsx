import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3nuv0byt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c3nuv0byt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:sound-on-solid"} {...others} />);
}

export default Component;
