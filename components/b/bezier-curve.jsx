import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kn964er2l.css';
import '../../css/z/zersuh-bf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBmAcke5P"><g class="v3_i3wktz"><path class="kn964er2l"/><path class="zersuh-bf"/></g></mask></defs><path mask="url(#SVGBmAcke5P)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bezier-curve"} {...others} />);
}

export default Component;
