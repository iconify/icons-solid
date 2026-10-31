import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz2cu2yfe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tz2cu2yfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:gamepad-solid"} {...others} />);
}

export default Component;
