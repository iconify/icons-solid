import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw4887bwm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tw4887bwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:speaker"} {...others} />);
}

export default Component;
