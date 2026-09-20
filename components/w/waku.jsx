import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0isaxfvi.css';
import '../../css/z/znm6qw9zy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="z0isaxfvi"/><path class="znm6qw9zy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:waku"} {...others} />);
}

export default Component;
