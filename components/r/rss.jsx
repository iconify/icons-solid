import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/h/hvqy7zb2s.css';
import '../../css/c/c5drbra_w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7wUwycJl"><g class="ufeehvblu"><path class="hvqy7zb2s"/><path class="c5drbra_w"/></g></mask></defs><path mask="url(#SVG7wUwycJl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:rss"} {...others} />);
}

export default Component;
