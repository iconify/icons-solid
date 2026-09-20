import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx-rv1g-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yx-rv1g-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:qr-scan-2-line"} {...others} />);
}

export default Component;
