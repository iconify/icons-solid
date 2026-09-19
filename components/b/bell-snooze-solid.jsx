import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgch26bhm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dgch26bhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:bell-snooze-solid"} {...others} />);
}

export default Component;
