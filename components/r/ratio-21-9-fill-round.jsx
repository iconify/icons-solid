import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq1ge0_ym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aq1ge0_ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ratio-21-9-fill-round"} {...others} />);
}

export default Component;
