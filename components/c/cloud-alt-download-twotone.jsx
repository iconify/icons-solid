import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj083o.css';
import '../../css/y/ydovum.css';
import '../../css/v/vyup4q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-es1ygv.css';
import '../../css/d/d-wrh7yw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pj083o ydovum"/><path class="vyup4q ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-download-twotone"} {...others} />);
}

export default Component;
