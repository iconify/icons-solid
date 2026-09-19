import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j1-9tgbck.css';
import '../../css/n/ny2zpnbhd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG7ipxRbRJ"><g class="aql7dnt-u"><path class="j1-9tgbck"/><path class="ny2zpnbhd"/></g></mask></defs><path mask="url(#SVG7ipxRbRJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:handwashing"} {...others} />);
}

export default Component;
