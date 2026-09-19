import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jain414ui.css';
import '../../css/r/r_0d81uyp.css';
import '../../css/e/eel2labxa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJs3Xyesl"><g class="ft5dv1b6b"><rect transform="rotate(-90 14 44)" class="jain414ui"/><path class="r_0d81uyp"/><path class="eel2labxa"/></g></mask></defs><path mask="url(#SVGJs3Xyesl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:battery-storage"} {...others} />);
}

export default Component;
