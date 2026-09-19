import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/x_-1fk5qn.css';
import '../../css/u/u1r09_bgv.css';
import '../../css/l/loc2q-8hs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXAla8c4b"><g class="v3_i3wktz"><path class="x_-1fk5qn"/><path class="u1r09_bgv"/><path class="loc2q-8hs"/></g></mask></defs><path mask="url(#SVGXAla8c4b)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sun"} {...others} />);
}

export default Component;
