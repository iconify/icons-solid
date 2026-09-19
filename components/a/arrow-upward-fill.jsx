import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fof7p7mfa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fof7p7mfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:arrow-upward-fill"} {...others} />);
}

export default Component;
