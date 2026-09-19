import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ubq5zrksv.css';
import '../../css/k/kp70kqvzv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGc9jDee5A"><g class="aql7dnt-u"><path class="ubq5zrksv"/><path class="kp70kqvzv"/></g></mask></defs><path mask="url(#SVGc9jDee5A)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:optional"} {...others} />);
}

export default Component;
