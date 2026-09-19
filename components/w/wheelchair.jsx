import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bo0gd_fua.css';
import '../../css/i/itwm8w2av.css';
import '../../css/l/l99dlhbri.css';
import '../../css/w/wmsnpobfq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKDASGbCp"><g class="aql7dnt-u"><path class="bo0gd_fua"/><path class="itwm8w2av"/><path class="l99dlhbri"/><path class="wmsnpobfq"/></g></mask></defs><path mask="url(#SVGKDASGbCp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:wheelchair"} {...others} />);
}

export default Component;
