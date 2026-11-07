import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae_fwibxk.css';
import '../../css/a/a_tf9kbuk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ae_fwibxk"/><path class="a_tf9kbuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-circle-outline"} {...others} />);
}

export default Component;
