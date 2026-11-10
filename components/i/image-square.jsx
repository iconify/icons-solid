import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2qqm-b8j.css';
import '../../css/x/xkdokkb5x.css';
import '../../css/r/reyjw4bwg.css';
import '../../css/g/gn5xo6xpf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i2qqm-b8j"/><path class="xkdokkb5x"/><path class="reyjw4bwg"/><path class="gn5xo6xpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-square"} {...others} />);
}

export default Component;
