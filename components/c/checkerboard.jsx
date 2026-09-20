import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8c5dcbly.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="j8c5dcbly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:checkerboard"} {...others} />);
}

export default Component;
