import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/k/k9l20-byg.css';
import '../../css/t/twg4s5urk.css';
import '../../css/n/nygdt9-xb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG22LBjcWJ"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="k9l20-byg"/><circle class="twg4s5urk"/><circle class="nygdt9-xb"/></g></mask></defs><path mask="url(#SVG22LBjcWJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:face-with-smiling-open-eyes"} {...others} />);
}

export default Component;
