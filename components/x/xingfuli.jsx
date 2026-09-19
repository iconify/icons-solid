import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1_swcb_o.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/h/h_d0tjb4u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWCQyfbqp"><g class="v1_swcb_o"><path class="p-3d8dotc"/><path class="h_d0tjb4u"/></g></mask></defs><path mask="url(#SVGWCQyfbqp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:xingfuli"} {...others} />);
}

export default Component;
