import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/m3rbq0wjz.css';
import '../../css/k/kb--afb7e.css';
import '../../css/n/nzzcombqn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQONho08S"><g class="aql7dnt-u"><path class="m3rbq0wjz"/><path class="kb--afb7e"/><path class="nzzcombqn"/></g></mask></defs><path mask="url(#SVGQONho08S)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-collection-one"} {...others} />);
}

export default Component;
