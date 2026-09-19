import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gu7252bkg.css';
import '../../css/w/w2bt9_f-g.css';
import '../../css/x/xyyyxpyvq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwGVw3deM"><g class="wwvp95byt"><path class="gu7252bkg"/><path class="w2bt9_f-g"/><path class="xyyyxpyvq"/></g></mask></defs><path mask="url(#SVGwGVw3deM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:movie-board"} {...others} />);
}

export default Component;
