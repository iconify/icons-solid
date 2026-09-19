import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzditrbqy.css';
import '../../css/b/bl1wln6eg.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="xzditrbqy"/><path class="bl1wln6eg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:camera-fill"} {...others} />);
}

export default Component;
