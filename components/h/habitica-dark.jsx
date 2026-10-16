import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6oqsc4sr.css';
import '../../css/h/h2_b95bkj.css';
import '../../css/w/wce7kccvg.css';

const viewBox = {"width":408,"height":76};
const content = `<path class="r6oqsc4sr"/><path class="h2_b95bkj"/><path class="wce7kccvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:habitica-dark"} {...others} />);
}

export default Component;
