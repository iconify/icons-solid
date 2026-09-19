import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xgsvngbyx.css';
import '../../css/k/kn3pzwbws.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkCJgveRL"><g class="aql7dnt-u"><path clip-rule="evenodd" class="xgsvngbyx"/><path class="kn3pzwbws"/></g></mask></defs><path mask="url(#SVGkCJgveRL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:building-one"} {...others} />);
}

export default Component;
