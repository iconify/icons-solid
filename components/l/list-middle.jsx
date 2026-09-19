import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n6ohdwn_k.css';
import '../../css/r/rqjfppbsd.css';
import '../../css/y/y0qmgo4nn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYbLVBdom"><g class="v3_i3wktz"><path class="n6ohdwn_k"/><path class="rqjfppbsd"/><path class="y0qmgo4nn"/></g></mask></defs><path mask="url(#SVGYbLVBdom)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:list-middle"} {...others} />);
}

export default Component;
