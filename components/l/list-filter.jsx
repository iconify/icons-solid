import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ec2szhbtj.css';
import '../../css/p/p_eb1bc0z.css';
import '../../css/k/kzf3w32zp.css';
import '../../css/v/v2t06_eti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ec2szhbtj wm-shadow"/><path class="p_eb1bc0z wm-shadow"/><path class="kzf3w32zp"/><path class="v2t06_eti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:list-filter"} {...others} />);
}

export default Component;
