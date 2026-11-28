import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqomj7bej.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dh1ukibik.css';
import '../../css/a/a4jv2kb1u.css';
import '../../css/u/uni0xsbld.css';
import '../../css/s/s6d4vbbae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gqomj7bej secondary"/><g class="dt0cm9dhy primary"><path class="dh1ukibik"/><path class="a4jv2kb1u"/><path class="uni0xsbld"/><path class="s6d4vbbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bamboo-duo"} {...others} />);
}

export default Component;
