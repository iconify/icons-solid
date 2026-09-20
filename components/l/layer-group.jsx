import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un4u_u6jm.css';
import '../../css/m/m0_43203z.css';
import '../../css/e/e-4rvpmbt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="un4u_u6jm"/><path class="m0_43203z"/><path class="e-4rvpmbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:layer-group"} {...others} />);
}

export default Component;
