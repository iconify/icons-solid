import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb9utlrxw.css';
import '../../css/j/jfmxxebmr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tb9utlrxw"/><path class="jfmxxebmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:microphone-filled"} {...others} />);
}

export default Component;
