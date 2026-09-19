import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/c/chjv-8bni.css';
import '../../css/e/ep0jypbas.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyf6MKd5A"><g class="wwvp95byt"><path class="chjv-8bni"/><path class="ep0jypbas"/></g></mask></defs><path mask="url(#SVGyf6MKd5A)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sd"} {...others} />);
}

export default Component;
