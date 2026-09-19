import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/x5qfqd5ld.css';
import '../../css/w/wujqs2ipr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6MK2Wb3V"><g class="v3_i3wktz"><path class="x5qfqd5ld"/><path class="wujqs2ipr"/></g></mask></defs><path mask="url(#SVG6MK2Wb3V)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:snacks"} {...others} />);
}

export default Component;
