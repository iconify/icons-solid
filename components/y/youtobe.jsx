import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1_swcb_o.css';
import '../../css/d/dwhj-nzls.css';
import '../../css/c/c9_-b0brr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9SKiadwd"><g class="v1_swcb_o"><path class="dwhj-nzls"/><path class="c9_-b0brr"/></g></mask></defs><path mask="url(#SVG9SKiadwd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:youtobe"} {...others} />);
}

export default Component;
