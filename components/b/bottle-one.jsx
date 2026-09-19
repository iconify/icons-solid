import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/syw2plbjf.css';
import '../../css/r/r7e936b3o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG24aNScsn"><g class="aql7dnt-u"><path class="syw2plbjf"/><path class="r7e936b3o"/></g></mask></defs><path mask="url(#SVG24aNScsn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bottle-one"} {...others} />);
}

export default Component;
