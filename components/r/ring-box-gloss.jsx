import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi1hhvbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xi1hhvbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ring-box-gloss"} {...others} />);
}

export default Component;
