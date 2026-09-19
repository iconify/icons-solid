import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj-gdebvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xj-gdebvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:mammotion-luba-side"} {...others} />);
}

export default Component;
