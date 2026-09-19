import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qbeye2b4p.css';
import '../../css/k/knna4p-xd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG08JqIcmp"><g class="aql7dnt-u"><path class="qbeye2b4p"/><path class="knna4p-xd"/></g></mask></defs><path mask="url(#SVG08JqIcmp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:popcorn"} {...others} />);
}

export default Component;
