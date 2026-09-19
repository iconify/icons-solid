import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iv837lbrb.css';
import '../../css/x/xx_r_sbcu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIj1pjezi"><g class="aql7dnt-u"><path class="iv837lbrb"/><path class="xx_r_sbcu"/></g></mask></defs><path mask="url(#SVGIj1pjezi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rocking-horse"} {...others} />);
}

export default Component;
