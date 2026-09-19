import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/dx6rcpb5j.css';
import '../../css/z/z-3ptvbim.css';
import '../../css/h/hxw676bki.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGc7OC7EBX"><g class="rohhhzb0l"><path class="dx6rcpb5j"/><path class="z-3ptvbim"/><path class="hxw676bki"/></g></mask></defs><path mask="url(#SVGc7OC7EBX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:analysis"} {...others} />);
}

export default Component;
