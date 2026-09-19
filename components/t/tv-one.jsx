import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/n/n-h32kbxs.css';
import '../../css/g/ggkj7yboh.css';
import '../../css/i/ikt6m-tna.css';
import '../../css/a/asnrasl1d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMx9Ojb7e"><g class="ufeehvblu"><path class="n-h32kbxs"/><path class="ggkj7yboh"/><path class="ikt6m-tna"/><path class="asnrasl1d"/></g></mask></defs><path mask="url(#SVGMx9Ojb7e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tv-one"} {...others} />);
}

export default Component;
