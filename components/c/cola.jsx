import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/g3k3sybmt.css';
import '../../css/d/d7cnkhb7h.css';
import '../../css/x/xec1e65iq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHZVrtpFY"><g class="rohhhzb0l"><path class="g3k3sybmt"/><path class="d7cnkhb7h"/><path class="xec1e65iq"/></g></mask></defs><path mask="url(#SVGHZVrtpFY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cola"} {...others} />);
}

export default Component;
