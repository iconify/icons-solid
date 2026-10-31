import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w06c75bsu.css';
import '../../css/e/enc12b-6c.css';
import '../../css/b/bz1wzdv4b.css';
import '../../css/h/h17d1abtm.css';
import '../../css/v/v2l1h2blr.css';
import '../../css/r/ror7ffwwi.css';
import '../../css/y/y5tj-sbww.css';
import '../../css/w/w2gk26b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w06c75bsu wm-shadow"/><path class="enc12b-6c wm-s"/><path class="bz1wzdv4b wm-shadow"/><path class="h17d1abtm"/><path class="v2l1h2blr"/><path class="ror7ffwwi wm-s"/><path class="wm-s y5tj-sbww"/><path class="w2gk26b2r wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:clipboard-pen"} {...others} />);
}

export default Component;
