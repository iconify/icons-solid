import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/puu5ycbjz.css';
import '../../css/j/j7pl0s5se.css';
import '../../css/e/eytnxnxck.css';
import '../../css/c/contxzbor.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfGr7E6hp"><g class="rohhhzb0l"><path class="puu5ycbjz"/><path class="j7pl0s5se"/><path class="eytnxnxck"/><path class="contxzbor"/></g></mask></defs><path mask="url(#SVGfGr7E6hp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cooking"} {...others} />);
}

export default Component;
