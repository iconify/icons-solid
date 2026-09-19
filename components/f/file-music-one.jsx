import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zej0gtb4k.css';
import '../../css/h/hgd8yhblr.css';
import '../../css/n/nzzcombqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQxsK2bKz"><g class="aql7dnt-u"><path class="zej0gtb4k"/><circle class="hgd8yhblr"/><path class="nzzcombqn"/></g></mask></defs><path mask="url(#SVGQxsK2bKz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-music-one"} {...others} />);
}

export default Component;
