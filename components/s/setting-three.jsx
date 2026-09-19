import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/htvgmj-8k.css';
import '../../css/j/jt31pohym.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6G4YHeLE"><g class="aql7dnt-u"><circle class="htvgmj-8k"/><path class="jt31pohym"/></g></mask></defs><path mask="url(#SVG6G4YHeLE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:setting-three"} {...others} />);
}

export default Component;
