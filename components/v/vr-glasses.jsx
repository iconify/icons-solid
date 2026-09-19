import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt-yivboh.css';
import '../../css/x/xc7ndn9yy.css';
import '../../css/k/kusnjxbbc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTuf6aedj"><g clip-rule="evenodd" class="mt-yivboh"><path class="xc7ndn9yy"/><path class="kusnjxbbc"/></g></mask></defs><path mask="url(#SVGTuf6aedj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vr-glasses"} {...others} />);
}

export default Component;
