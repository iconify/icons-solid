import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0p-5_bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d0p-5_bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:early-access-center"} {...others} />);
}

export default Component;
