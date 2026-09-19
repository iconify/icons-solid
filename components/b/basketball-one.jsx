import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uewmtb75p.css';
import '../../css/k/kna-2skoh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuqqBkdsV"><g class="ft5dv1b6b"><path class="uewmtb75p"/><path class="kna-2skoh"/></g></mask></defs><path mask="url(#SVGuqqBkdsV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:basketball-one"} {...others} />);
}

export default Component;
