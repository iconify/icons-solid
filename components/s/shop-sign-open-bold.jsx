import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vb4whf11f.css';
import '../../css/r/rso40ypgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vb4whf11f"/><path class="rso40ypgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shop-sign-open-bold"} {...others} />);
}

export default Component;
