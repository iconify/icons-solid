import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prt4gzb-p.css';
import '../../css/m/mh0g7aczs.css';
import '../../css/m/m9b14vbcs.css';
import '../../css/b/bkfwo226r.css';
import '../../css/p/p6c6arbow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="prt4gzb-p"/><path class="mh0g7aczs"/><path class="m9b14vbcs"/><path class="bkfwo226r"/><path class="p6c6arbow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:perfume-bottle-duotone"} {...others} />);
}

export default Component;
