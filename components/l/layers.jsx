import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/k5evs0bcf.css';
import '../../css/r/rz6xoab1r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpiGF3bve"><g class="v3_i3wktz"><path class="k5evs0bcf"/><path class="rz6xoab1r"/></g></mask></defs><path mask="url(#SVGpiGF3bve)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:layers"} {...others} />);
}

export default Component;
