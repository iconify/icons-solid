import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/s/sa9ebpbox.css';
import '../../css/y/y4vjg0k3v.css';
import '../../css/v/vf4h32bmh.css';
import '../../css/i/ib2bsphlp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkV84McAz"><g class="aql7dnt-u"><ellipse class="sa9ebpbox"/><path class="y4vjg0k3v"/><path class="vf4h32bmh"/><path class="ib2bsphlp"/></g></mask></defs><path mask="url(#SVGkV84McAz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:data-one"} {...others} />);
}

export default Component;
