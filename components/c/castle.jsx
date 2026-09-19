import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k0phntbpf.css';
import '../../css/h/hdb5ivrwk.css';
import '../../css/g/g_i87xbuh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1AGYgdyd"><g class="aql7dnt-u"><path class="k0phntbpf"/><path class="hdb5ivrwk"/><path class="g_i87xbuh"/></g></mask></defs><path mask="url(#SVG1AGYgdyd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:castle"} {...others} />);
}

export default Component;
