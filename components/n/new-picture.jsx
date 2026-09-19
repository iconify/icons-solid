import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/n/ng2u88qjz.css';
import '../../css/p/pfipa5buf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNIXFNeRn"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="ng2u88qjz"/><path class="pfipa5buf"/></g></mask></defs><path mask="url(#SVGNIXFNeRn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:new-picture"} {...others} />);
}

export default Component;
