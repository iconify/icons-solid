import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ubq5zrksv.css';
import '../../css/f/fg6trmbac.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuiyM6d6v"><g class="aql7dnt-u"><path class="ubq5zrksv"/><path class="fg6trmbac"/></g></mask></defs><path mask="url(#SVGuiyM6d6v)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:transaction"} {...others} />);
}

export default Component;
