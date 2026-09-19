import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qc5yn2ygv.css';
import '../../css/y/yg4vlgrtx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFEeZHd1I"><g class="aql7dnt-u"><path class="qc5yn2ygv"/><path class="yg4vlgrtx"/></g></mask></defs><path mask="url(#SVGFEeZHd1I)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:micro-sd"} {...others} />);
}

export default Component;
