import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a_-bsmb1m.css';
import '../../css/r/rg113dddb.css';
import '../../css/k/kj-k9st5r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGs0naKbWD"><g class="aql7dnt-u"><path class="a_-bsmb1m"/><path class="rg113dddb"/><path class="kj-k9st5r"/></g></mask></defs><path mask="url(#SVGs0naKbWD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:romper"} {...others} />);
}

export default Component;
