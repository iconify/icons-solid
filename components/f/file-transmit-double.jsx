import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvcfj9tnp.css';
import '../../css/m/md2nh-bhe.css';
import '../../css/t/t87a3gbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pvcfj9tnp"/><path class="md2nh-bhe"/><path class="t87a3gbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-transmit-double"} {...others} />);
}

export default Component;
