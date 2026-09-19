import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/i89f99xzv.css';
import '../../css/k/krgim9y4j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqnHOcdqL"><g class="v3_i3wktz"><rect class="i89f99xzv"/><path class="krgim9y4j"/></g></mask></defs><path mask="url(#SVGqnHOcdqL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:display"} {...others} />);
}

export default Component;
