import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/g7m1m763r.css';
import '../../css/b/bqvh2xbzc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3kdFIerk"><g class="v3_i3wktz"><path class="g7m1m763r"/><path class="bqvh2xbzc"/></g></mask></defs><path mask="url(#SVG3kdFIerk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:branch"} {...others} />);
}

export default Component;
