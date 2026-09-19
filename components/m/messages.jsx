import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/l/lds1gmbsi.css';
import '../../css/g/gpeukobmo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgyn6Nddu"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="lds1gmbsi"/><path class="gpeukobmo"/></g></mask></defs><path mask="url(#SVGgyn6Nddu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:messages"} {...others} />);
}

export default Component;
