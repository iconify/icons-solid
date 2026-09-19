import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/br0c_qbar.css';
import '../../css/l/lxbxsbmqz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrJtsNe7M"><g class="aql7dnt-u"><path class="br0c_qbar"/><path clip-rule="evenodd" class="lxbxsbmqz"/></g></mask></defs><path mask="url(#SVGrJtsNe7M)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:graphic-design-two"} {...others} />);
}

export default Component;
