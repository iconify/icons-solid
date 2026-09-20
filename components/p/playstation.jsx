import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tclq6vkvr.css';

const viewBox = {"width":122.88,"height":95.18};
const content = `<path class="tclq6vkvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:playstation"} {...others} />);
}

export default Component;
