import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gufcdpbgn.css';
import '../../css/o/oxn1-zbqv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="gufcdpbgn"/><path class="oxn1-zbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:apl"} {...others} />);
}

export default Component;
