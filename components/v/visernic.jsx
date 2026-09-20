import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5dwkmnlz.css';
import '../../css/w/w50wxabok.css';
import '../../css/g/gdzqqzccu.css';

const viewBox = {"width":1104,"height":1104};
const content = `<path class="f5dwkmnlz"/><path class="w50wxabok"/><path class="gdzqqzccu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:visernic"} {...others} />);
}

export default Component;
