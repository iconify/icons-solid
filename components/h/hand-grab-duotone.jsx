import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyn4iqr1o.css';
import '../../css/s/spcg6lt2e.css';
import '../../css/e/egczp81iz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zyn4iqr1o"/><path class="spcg6lt2e"/><path class="egczp81iz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hand-grab-duotone"} {...others} />);
}

export default Component;
