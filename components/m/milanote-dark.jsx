import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-cnqeb4k.css';

const viewBox = {"width":220,"height":220};
const content = `<path class="b-cnqeb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:milanote-dark"} {...others} />);
}

export default Component;
