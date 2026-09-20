import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v69tmvbwn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="v69tmvbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:voice-activation-check-validate"} {...others} />);
}

export default Component;
