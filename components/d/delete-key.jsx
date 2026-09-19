import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/v07ydtbdh.css';
import '../../css/k/ks_btesko.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6CAphd8j"><g class="aql7dnt-u"><path class="v07ydtbdh"/><path class="ks_btesko"/></g></mask></defs><path mask="url(#SVG6CAphd8j)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:delete-key"} {...others} />);
}

export default Component;
