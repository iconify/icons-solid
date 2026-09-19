import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/v0ofwpdfu.css';
import '../../css/q/q06y_ceai.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGplfPTcLm"><g class="rohhhzb0l"><path clip-rule="evenodd" class="v0ofwpdfu"/><path class="q06y_ceai"/></g></mask></defs><path mask="url(#SVGplfPTcLm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sd-card"} {...others} />);
}

export default Component;
