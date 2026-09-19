import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bj2gztbde.css';
import '../../css/k/ka-b-fb0g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGr9lWrdrs"><g class="aql7dnt-u"><path class="bj2gztbde"/><path class="ka-b-fb0g"/></g></mask></defs><path mask="url(#SVGr9lWrdrs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rs-male"} {...others} />);
}

export default Component;
