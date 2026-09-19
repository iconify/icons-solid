import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/c/c6pd6mb5r.css';
import '../../css/h/hawhjbb5r.css';
import '../../css/n/n3pzp0m4r.css';
import '../../css/b/bv8fg4gct.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGS51lvWkX"><g class="ufeehvblu"><rect class="c6pd6mb5r"/><path class="hawhjbb5r"/><path class="n3pzp0m4r"/><path class="bv8fg4gct"/></g></mask></defs><path mask="url(#SVGS51lvWkX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:electronic-locks-open"} {...others} />);
}

export default Component;
