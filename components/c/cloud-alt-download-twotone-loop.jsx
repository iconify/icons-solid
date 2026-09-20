import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3-2hw.css';
import '../../css/y/ydovum.css';
import '../../css/e/e261aa.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-es1ygv.css';
import '../../css/d/d-wrh7yw.css';
import '../../css/d/d-escncg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3-2hw ydovum"/><path class="e261aa ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-download-twotone-loop"} {...others} />);
}

export default Component;
