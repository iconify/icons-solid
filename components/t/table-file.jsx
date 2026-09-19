import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kz767lbkx.css';
import '../../css/h/hrh2izb_y.css';
import '../../css/f/f2jxhypno.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCpDiAduO"><g class="ufeehvblu"><path class="kz767lbkx"/><path class="hrh2izb_y"/><path class="f2jxhypno"/></g></mask></defs><path mask="url(#SVGCpDiAduO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:table-file"} {...others} />);
}

export default Component;
