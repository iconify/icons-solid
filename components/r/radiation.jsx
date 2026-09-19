import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgg8ckxhh.css';
import '../../css/g/g5idr7-ek.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEiAW8bBD"><g class="ft5dv1b6b"><path class="xgg8ckxhh"/><path class="g5idr7-ek"/></g></mask></defs><path mask="url(#SVGEiAW8bBD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:radiation"} {...others} />);
}

export default Component;
