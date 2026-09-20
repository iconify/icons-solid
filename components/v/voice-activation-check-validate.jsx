import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yktk2bixn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yktk2bixn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:voice-activation-check-validate"} {...others} />);
}

export default Component;
