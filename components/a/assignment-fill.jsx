import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njc-z_btr.css';
import '../../css/k/kiohhd3cn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="njc-z_btr"/><path clip-rule="evenodd" class="kiohhd3cn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:assignment-fill"} {...others} />);
}

export default Component;
