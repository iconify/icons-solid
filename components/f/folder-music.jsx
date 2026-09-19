import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bcqa_q4nr.css';
import '../../css/l/l8-5itb7f.css';
import '../../css/n/n78k4lb_t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgTDIxG9F"><g class="ufeehvblu"><path class="bcqa_q4nr"/><path class="l8-5itb7f"/><circle class="n78k4lb_t"/></g></mask></defs><path mask="url(#SVGgTDIxG9F)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:folder-music"} {...others} />);
}

export default Component;
