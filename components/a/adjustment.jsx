import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rwe_zsbvy.css';
import '../../css/l/l56ko-bcu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5kAc4d1z"><g class="aql7dnt-u"><path class="rwe_zsbvy"/><path class="l56ko-bcu"/></g></mask></defs><path mask="url(#SVG5kAc4d1z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:adjustment"} {...others} />);
}

export default Component;
