import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr8bqw60r.css';
import '../../css/q/qfc_s602x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cr8bqw60r"/><path class="qfc_s602x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-full-minimalistic-bold"} {...others} />);
}

export default Component;
