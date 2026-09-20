import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h27h8qbda.css';
import '../../css/g/giuvwzbiq.css';
import '../../css/c/ckfq98akt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="h27h8qbda"/><path class="giuvwzbiq"/><path class="ckfq98akt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:spack"} {...others} />);
}

export default Component;
