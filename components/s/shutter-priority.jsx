import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/x44bfmbwq.css';
import '../../css/o/ohqv07ktw.css';
import '../../css/a/axc34h-ro.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFeMiPcSA"><g class="ufeehvblu"><path class="x44bfmbwq"/><path class="ohqv07ktw"/><path class="axc34h-ro"/></g></mask></defs><path mask="url(#SVGFeMiPcSA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shutter-priority"} {...others} />);
}

export default Component;
