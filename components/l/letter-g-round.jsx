import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgpg_wbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rgpg_wbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-g-round"} {...others} />);
}

export default Component;
