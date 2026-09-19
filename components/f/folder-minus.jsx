import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/k/krz1plydf.css';
import '../../css/d/dv30fkbev.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNtYAwbSA"><g class="ufeehvblu"><path class="krz1plydf"/><path class="dv30fkbev"/></g></mask></defs><path mask="url(#SVGNtYAwbSA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:folder-minus"} {...others} />);
}

export default Component;
