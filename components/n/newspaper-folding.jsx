import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/sd4awts7b.css';
import '../../css/u/ui_tn7b4b.css';
import '../../css/q/q_j1-9b1h.css';
import '../../css/z/z-aopmadu.css';
import '../../css/r/rea-h8o7q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2jlGydDx"><g class="wwvp95byt"><path class="sd4awts7b"/><path class="ui_tn7b4b"/><path class="q_j1-9b1h"/><path class="z-aopmadu"/><path class="rea-h8o7q"/></g></mask></defs><path mask="url(#SVG2jlGydDx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:newspaper-folding"} {...others} />);
}

export default Component;
