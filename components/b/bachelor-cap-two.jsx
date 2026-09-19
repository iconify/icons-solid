import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/x4rmk8quk.css';
import '../../css/u/uybie1zay.css';
import '../../css/a/aufer1bkq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGin54IcQU"><g class="v3_i3wktz"><path class="x4rmk8quk"/><path class="uybie1zay"/><path class="aufer1bkq"/></g></mask></defs><path mask="url(#SVGin54IcQU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bachelor-cap-two"} {...others} />);
}

export default Component;
