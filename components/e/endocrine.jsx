import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/q0of7lbrg.css';
import '../../css/i/i131otw-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyjeXjcvD"><g class="ufeehvblu"><path clip-rule="evenodd" class="q0of7lbrg"/><path class="i131otw-v"/></g></mask></defs><path mask="url(#SVGyjeXjcvD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:endocrine"} {...others} />);
}

export default Component;
