import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mv2y2abjm.css';
import '../../css/o/oftu6aboy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGndQR5c2x"><g class="v3_i3wktz"><path class="mv2y2abjm"/><path class="oftu6aboy"/></g></mask></defs><path mask="url(#SVGndQR5c2x)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ring"} {...others} />);
}

export default Component;
