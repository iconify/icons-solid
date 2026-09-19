import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gztd8-bpl.css';
import '../../css/d/d9o7i0q2s.css';
import '../../css/f/fl45o4a_e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGByU5edwj"><g class="ft5dv1b6b"><rect class="gztd8-bpl"/><path class="d9o7i0q2s"/><path clip-rule="evenodd" class="fl45o4a_e"/></g></mask></defs><path mask="url(#SVGByU5edwj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:view-list"} {...others} />);
}

export default Component;
