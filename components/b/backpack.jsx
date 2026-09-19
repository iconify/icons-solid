import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/n30u93bfw.css';
import '../../css/d/ddp98ybow.css';
import '../../css/p/parmcdmdk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlVxLAbZJ"><g class="aql7dnt-u"><path class="n30u93bfw"/><path class="ddp98ybow"/><path class="parmcdmdk"/></g></mask></defs><path mask="url(#SVGlVxLAbZJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:backpack"} {...others} />);
}

export default Component;
