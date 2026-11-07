import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/nj3877h8f.css';
import '../../css/b/bej489v3t.css';
import '../../css/p/pjctnbcqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="nj3877h8f"/><path class="bej489v3t"/></g><path class="pjctnbcqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:telescope-bold-duotone"} {...others} />);
}

export default Component;
