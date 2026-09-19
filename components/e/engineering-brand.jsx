import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gwye36byq.css';
import '../../css/b/blg8u174q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKLmrrc1o"><g class="v3_i3wktz"><rect class="gwye36byq"/><path class="blg8u174q"/></g></mask></defs><path mask="url(#SVGKLmrrc1o)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:engineering-brand"} {...others} />);
}

export default Component;
