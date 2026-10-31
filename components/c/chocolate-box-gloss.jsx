import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faxv8eb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="faxv8eb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chocolate-box-gloss"} {...others} />);
}

export default Component;
