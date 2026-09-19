import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/clsvsg_8u.css';
import '../../css/j/jydfnccii.css';
import '../../css/n/nzi04mbzv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGX1zZCeUe"><g class="aql7dnt-u"><path class="clsvsg_8u"/><circle class="jydfnccii"/><path class="nzi04mbzv"/></g></mask></defs><path mask="url(#SVGX1zZCeUe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-top-card"} {...others} />);
}

export default Component;
