import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt64rj3ed.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jt64rj3ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-arrow-dropdown"} {...others} />);
}

export default Component;
