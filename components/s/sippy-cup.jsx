import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/blsw_3epl.css';
import '../../css/z/zup3dj9lq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzHjhsdUT"><g class="aql7dnt-u"><path class="blsw_3epl"/><path class="zup3dj9lq"/></g></mask></defs><path mask="url(#SVGzHjhsdUT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sippy-cup"} {...others} />);
}

export default Component;
