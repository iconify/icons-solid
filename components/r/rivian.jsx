import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fccn48b9y.css';

const viewBox = {"width":202.395,"height":42.309,"left":-1.197,"top":-1.197};
const content = `<path class="fccn48b9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rivian"} {...others} />);
}

export default Component;
