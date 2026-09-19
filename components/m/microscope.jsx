import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/ezq3zxkis.css';
import '../../css/p/phraqqbtz.css';
import '../../css/m/mv7_v6hps.css';
import '../../css/q/q8f8vcygc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiDDIqcbb"><g class="rohhhzb0l"><path class="ezq3zxkis"/><path clip-rule="evenodd" class="phraqqbtz"/><path class="mv7_v6hps"/><path class="q8f8vcygc"/></g></mask></defs><path mask="url(#SVGiDDIqcbb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:microscope"} {...others} />);
}

export default Component;
