import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3-2hw.css';
import '../../css/y/ydovum.css';
import '../../css/c/cps6cn.css';
import '../../css/f/fill-to-0.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-6uh96y.css';
import '../../css/d/d-t2f-vz.css';
import '../../css/d/d-46g2pq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3-2hw ydovum"/><path class="cps6cn ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-upload-twotone-loop"} {...others} />);
}

export default Component;
