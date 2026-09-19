import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek-wxnthc.css';
import '../../css/j/j-tdi7bib.css';
import '../../css/p/pre-thz9w.css';
import '../../css/y/y9cl-l_4z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ek-wxnthc"/><circle class="j-tdi7bib"/><circle class="pre-thz9w"/><circle class="y9cl-l_4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:bowling"} {...others} />);
}

export default Component;
