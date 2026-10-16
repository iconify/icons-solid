import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0z26jaug.css';

const viewBox = {"width":68.505,"height":45.064};
const content = `<path class="z0z26jaug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kopia-dark"} {...others} />);
}

export default Component;
