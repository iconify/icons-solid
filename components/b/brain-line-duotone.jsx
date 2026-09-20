import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/spkxxqb6w.css';
import '../../css/b/b7xb3lbdv.css';
import '../../css/j/jedtkeb6b.css';
import '../../css/m/mu6oepxmt.css';
import '../../css/d/d2_mkkdnx.css';
import '../../css/n/ng4b87bun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="spkxxqb6w"/><path class="b7xb3lbdv"/><path class="jedtkeb6b"/><path class="mu6oepxmt"/><path class="d2_mkkdnx"/><path class="ng4b87bun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brain-line-duotone"} {...others} />);
}

export default Component;
