import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-x6w3ngg.css';

const viewBox = {"width":51.974,"height":20.409,"left":-0.578,"top":-0.578};
const content = `<path class="m-x6w3ngg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ola-cabs"} {...others} />);
}

export default Component;
