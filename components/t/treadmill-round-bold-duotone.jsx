import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etj7zqhmh.css';
import '../../css/y/ymcuxj93n.css';
import '../../css/a/a3uc20buk.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/i/ijnsdcb5f.css';
import '../../css/o/ot4vp_b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="etj7zqhmh"/><path clip-rule="evenodd" class="ymcuxj93n"/><path class="a3uc20buk"/><g class="mc2zb0bvp"><path class="ijnsdcb5f"/><path class="ot4vp_b2c"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:treadmill-round-bold-duotone"} {...others} />);
}

export default Component;
