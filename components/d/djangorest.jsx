import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrnc_ebmy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wrnc_ebmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:djangorest"} {...others} />);
}

export default Component;
