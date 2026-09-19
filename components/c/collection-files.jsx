import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/x/xh09az3_x.css';
import '../../css/y/yhmnszb0i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGajqY4cmp"><g class="adexpl72i"><path class="xh09az3_x"/><path class="yhmnszb0i"/></g></mask></defs><path mask="url(#SVGajqY4cmp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:collection-files"} {...others} />);
}

export default Component;
