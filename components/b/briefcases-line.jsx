import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgpnn41og.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgpnn41og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:briefcases-line"} {...others} />);
}

export default Component;
