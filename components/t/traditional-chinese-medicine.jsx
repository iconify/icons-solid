import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/i5nc4sbme.css';
import '../../css/r/rn30mkb4n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGi4nHIdLK"><g class="rohhhzb0l"><path clip-rule="evenodd" class="i5nc4sbme"/><path class="rn30mkb4n"/></g></mask></defs><path mask="url(#SVGi4nHIdLK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:traditional-chinese-medicine"} {...others} />);
}

export default Component;
