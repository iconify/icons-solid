import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj69a5hdy.css';
import '../../css/o/ohpicmbmt.css';
import '../../css/m/mf9o9n5rb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gj69a5hdy"/><path class="ohpicmbmt"/><path class="mf9o9n5rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:remote-controller-minimalistic-outline"} {...others} />);
}

export default Component;
