import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/ucv-pibjs.css';
import '../../css/c/co9te6vwq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdKRUdeVA"><g class="ufeehvblu"><path class="ucv-pibjs"/><path class="co9te6vwq"/></g></mask></defs><path mask="url(#SVGdKRUdeVA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:local-two"} {...others} />);
}

export default Component;
