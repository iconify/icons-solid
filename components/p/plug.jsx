import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kkd09i5ve.css';
import '../../css/o/o2jheybdw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGonZNscbv"><g class="v3_i3wktz"><path class="kkd09i5ve"/><path class="o2jheybdw"/></g></mask></defs><path mask="url(#SVGonZNscbv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:plug"} {...others} />);
}

export default Component;
