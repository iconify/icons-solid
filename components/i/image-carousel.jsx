import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z33w5xbvj.css';
import '../../css/t/tbq22ql4t.css';
import '../../css/l/l9zps-btr.css';
import '../../css/k/krip4lmfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z33w5xbvj"/><path class="tbq22ql4t"/><path class="l9zps-btr"/><path class="krip4lmfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:image-carousel"} {...others} />);
}

export default Component;
