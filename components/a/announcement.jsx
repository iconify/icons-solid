import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jiqs0bwjn.css';
import '../../css/t/tnva8r8up.css';
import '../../css/i/ic972l8rf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbrrVVdvZ"><g class="ufeehvblu"><rect class="jiqs0bwjn"/><path class="tnva8r8up"/><path class="ic972l8rf"/></g></mask></defs><path mask="url(#SVGbrrVVdvZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:announcement"} {...others} />);
}

export default Component;
