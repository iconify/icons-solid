import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/t48pb7sst.css';
import '../../css/d/dl3heccpw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrPA0jb3Z"><g class="aql7dnt-u"><path class="t48pb7sst"/><path class="dl3heccpw"/></g></mask></defs><path mask="url(#SVGrPA0jb3Z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:memory-card"} {...others} />);
}

export default Component;
