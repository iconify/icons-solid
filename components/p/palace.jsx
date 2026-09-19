import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/hobk2lbyn.css';
import '../../css/y/y_f4_bbgw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGp58wRdoD"><g class="aql7dnt-u"><path class="hobk2lbyn"/><path class="y_f4_bbgw"/></g></mask></defs><path mask="url(#SVGp58wRdoD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:palace"} {...others} />);
}

export default Component;
