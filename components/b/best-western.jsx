import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppmx33bax.css';

const viewBox = {"width":66.61,"height":34.03,"left":249.8,"top":192.24};
const content = `<path class="ppmx33bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:best-western"} {...others} />);
}

export default Component;
