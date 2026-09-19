import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/k/kspzgnbsg.css';
import '../../css/u/u_nsrq4io.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXE6zpcEE"><g class="ufeehvblu"><rect class="kspzgnbsg"/><path class="u_nsrq4io"/></g></mask></defs><path mask="url(#SVGXE6zpcEE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:terminal"} {...others} />);
}

export default Component;
