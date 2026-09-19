import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ubq5zrksv.css';
import '../../css/a/as6uu1fdt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1IxIVcxW"><g class="aql7dnt-u"><path class="ubq5zrksv"/><path class="as6uu1fdt"/></g></mask></defs><path mask="url(#SVG1IxIVcxW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:exchange-four"} {...others} />);
}

export default Component;
