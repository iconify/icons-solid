import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/k/ka8m53b1q.css';
import '../../css/w/w-gz11o7m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWNM29dVN"><g class="rohhhzb0l"><path clip-rule="evenodd" class="vkcj4bcdm"/><path class="ka8m53b1q"/><path class="w-gz11o7m"/></g></mask></defs><path mask="url(#SVGWNM29dVN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:up-c"} {...others} />);
}

export default Component;
