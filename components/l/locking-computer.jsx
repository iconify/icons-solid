import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fn--mg62j.css';
import '../../css/c/cx_xpz38m.css';
import '../../css/d/du8bscc4l.css';
import '../../css/v/vfmc-6bme.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGP4VJidAi"><g class="v3_i3wktz"><path class="fn--mg62j"/><rect class="cx_xpz38m"/><path class="du8bscc4l"/><path class="vfmc-6bme"/></g></mask></defs><path mask="url(#SVGP4VJidAi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:locking-computer"} {...others} />);
}

export default Component;
