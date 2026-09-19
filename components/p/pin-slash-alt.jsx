import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccucf8nmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ccucf8nmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pin-slash-alt"} {...others} />);
}

export default Component;
