import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct8tf_ybb.css';
import '../../css/a/ar62u3ixi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ct8tf_ybb"/><path class="ar62u3ixi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:guitar-amp"} {...others} />);
}

export default Component;
