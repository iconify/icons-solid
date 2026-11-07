import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x409kst0b.css';
import '../../css/g/gb32k036r.css';
import '../../css/y/ytqhmyb8m.css';
import '../../css/u/uocc4vb2z.css';
import '../../css/p/pid91x9vq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x409kst0b"/><path class="gb32k036r"/><path class="ytqhmyb8m"/><path class="uocc4vb2z"/><path class="pid91x9vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gas-station-bold-duotone"} {...others} />);
}

export default Component;
