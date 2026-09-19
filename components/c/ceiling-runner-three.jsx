import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td-efsbyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="td-efsbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ceiling-runner-three"} {...others} />);
}

export default Component;
