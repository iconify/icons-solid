import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqznn1ydc.css';
import '../../css/a/a4v76gi7m.css';
import '../../css/w/wt1fcu4ke.css';
import '../../css/k/kmj7kph2b.css';
import '../../css/z/zb_4k5z-h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4M0msdHi"><g class="wqznn1ydc"><path class="a4v76gi7m"/><path class="wt1fcu4ke"/><path class="kmj7kph2b"/><path class="zb_4k5z-h"/></g></mask></defs><path mask="url(#SVG4M0msdHi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:badminton"} {...others} />);
}

export default Component;
