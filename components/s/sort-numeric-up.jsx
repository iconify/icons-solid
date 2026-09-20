import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er_tio5vc.css';
import '../../css/g/gwgon2blw.css';
import '../../css/d/dn4_b_blc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="er_tio5vc"/><path class="gwgon2blw"/><path class="dn4_b_blc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sort-numeric-up"} {...others} />);
}

export default Component;
