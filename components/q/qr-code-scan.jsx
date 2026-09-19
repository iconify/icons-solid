import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/typ1igblf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="typ1igblf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:qr-code-scan"} {...others} />);
}

export default Component;
