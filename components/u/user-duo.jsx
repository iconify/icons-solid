import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjtb_hbpd.css';
import '../../css/v/vu4dv3btp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjtb_hbpd secondary"/><path class="primary vu4dv3btp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:user-duo"} {...others} />);
}

export default Component;
