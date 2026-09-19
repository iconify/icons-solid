import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hhhhlpzei.css';
import '../../css/i/i1m49fb9a.css';
import '../../css/e/egg-ivb0a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeELe5cKQ"><g class="aql7dnt-u"><path class="hhhhlpzei"/><path class="i1m49fb9a"/><path class="egg-ivb0a"/></g></mask></defs><path mask="url(#SVGeELe5cKQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:delivery"} {...others} />);
}

export default Component;
