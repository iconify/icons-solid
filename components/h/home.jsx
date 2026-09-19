import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/t5rd35b9t.css';
import '../../css/x/xdizrabur.css';
import '../../css/h/h7tnjtbgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJ4yhmdpB"><g class="rohhhzb0l"><path class="t5rd35b9t"/><path class="xdizrabur"/><path class="h7tnjtbgk"/></g></mask></defs><path mask="url(#SVGJ4yhmdpB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:home"} {...others} />);
}

export default Component;
