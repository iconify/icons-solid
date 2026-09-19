import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/z1o7okxvx.css';
import '../../css/i/isqxqcc9p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsNjStRVO"><g class="aql7dnt-u"><path class="z1o7okxvx"/><path class="isqxqcc9p"/></g></mask></defs><path mask="url(#SVGsNjStRVO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:breast-pump"} {...others} />);
}

export default Component;
