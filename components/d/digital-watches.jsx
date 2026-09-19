import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xntym-b4a.css';
import '../../css/y/yjgfdpbqp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTSh0ncfl"><g class="rohhhzb0l"><rect class="xntym-b4a"/><path class="yjgfdpbqp"/></g></mask></defs><path mask="url(#SVGTSh0ncfl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:digital-watches"} {...others} />);
}

export default Component;
