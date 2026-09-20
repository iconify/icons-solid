import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7it1xbry.css';
import '../../css/p/pdc-cheye.css';
import '../../css/g/gp9no01ex.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r7it1xbry"/><path clip-rule="evenodd" class="pdc-cheye"/><path class="gp9no01ex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:passport-globe-flat"} {...others} />);
}

export default Component;
