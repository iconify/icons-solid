import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vg6nurc6a.css';
import '../../css/q/quq7zmbkq.css';
import '../../css/t/tbrfujb3u.css';
import '../../css/o/obkjuebjv.css';
import '../../css/n/nhxwf3_lp.css';
import '../../css/h/h2wdqacoy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGD8Yaoc1X"><g class="ft5dv1b6b"><path class="vg6nurc6a"/><path class="quq7zmbkq"/><path class="tbrfujb3u"/><path class="obkjuebjv"/><circle transform="rotate(45 33.766 14.46)" class="nhxwf3_lp"/><path class="h2wdqacoy"/></g></mask></defs><path mask="url(#SVGD8Yaoc1X)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:fish"} {...others} />);
}

export default Component;
