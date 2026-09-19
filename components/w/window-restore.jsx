import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr9fsfb8t.css';

const viewBox = {"width":2048,"height":1792};
const content = `<path class="kr9fsfb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:window-restore"} {...others} />);
}

export default Component;
