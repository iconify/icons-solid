import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ib2bsphlp.css';
import '../../css/q/q97o_r-5j.css';
import '../../css/v/vf4h32bmh.css';
import '../../css/y/y4vjg0k3v.css';
import '../../css/d/dqmk1_5ly.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGObghhdUY"><g class="aql7dnt-u"><path class="ib2bsphlp"/><ellipse class="q97o_r-5j"/><path class="vf4h32bmh"/><path class="y4vjg0k3v"/><path class="dqmk1_5ly"/></g></mask></defs><path mask="url(#SVGObghhdUY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:data-three"} {...others} />);
}

export default Component;
