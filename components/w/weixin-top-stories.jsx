import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uns4e8bmd.css';
import '../../css/u/uo9qgzmqh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4Rm6Hdox"><g class="aql7dnt-u"><path class="uns4e8bmd"/><path class="uo9qgzmqh"/></g></mask></defs><path mask="url(#SVG4Rm6Hdox)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:weixin-top-stories"} {...others} />);
}

export default Component;
