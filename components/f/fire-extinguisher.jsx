import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ieiw_bcsa.css';
import '../../css/b/bq8amg8zg.css';
import '../../css/t/tb6enfb5d.css';
import '../../css/d/davxk4nfz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGweEm4ctb"><g class="ft5dv1b6b"><path class="ieiw_bcsa"/><path class="bq8amg8zg"/><path class="tb6enfb5d"/><circle class="davxk4nfz"/></g></mask></defs><path mask="url(#SVGweEm4ctb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:fire-extinguisher"} {...others} />);
}

export default Component;
