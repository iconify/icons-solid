import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/rzkg9v93r.css';
import '../../css/d/d5tujbciz.css';
import '../../css/v/vgyxzcc2x.css';
import '../../css/a/apvj7jbhz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrAyCzc9l"><g class="rohhhzb0l"><path class="rzkg9v93r"/><circle class="d5tujbciz"/><path class="vgyxzcc2x"/><path class="apvj7jbhz"/></g></mask></defs><path mask="url(#SVGrAyCzc9l)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sickbed"} {...others} />);
}

export default Component;
