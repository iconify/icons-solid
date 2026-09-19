import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tuspmi0se.css';
import '../../css/e/ezgn372ii.css';
import '../../css/v/vcii2bb4q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqFsvzeTr"><g class="ft5dv1b6b"><path class="tuspmi0se"/><path class="ezgn372ii"/><path class="vcii2bb4q"/></g></mask></defs><path mask="url(#SVGqFsvzeTr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:weibo"} {...others} />);
}

export default Component;
