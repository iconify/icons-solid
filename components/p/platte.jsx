import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/f/f7orvpbwy.css';
import '../../css/i/i9aqj_b9h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGL6k8IccK"><g class="ufeehvblu"><path class="f7orvpbwy"/><path class="i9aqj_b9h"/></g></mask></defs><path mask="url(#SVGL6k8IccK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:platte"} {...others} />);
}

export default Component;
