import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lto4ctpit.css';
import '../../css/h/h-keftbiv.css';
import '../../css/z/z3ko96b0e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeSYLeVnl"><g class="ufeehvblu"><path class="lto4ctpit"/><path clip-rule="evenodd" class="h-keftbiv"/><path class="z3ko96b0e"/></g></mask></defs><path mask="url(#SVGeSYLeVnl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:monitor"} {...others} />);
}

export default Component;
