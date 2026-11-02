import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me-eke5in.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="me-eke5in"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:xbox-fill"} {...others} />);
}

export default Component;
