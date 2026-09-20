import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d78kiv0is.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="d78kiv0is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:download-box-1-solid"} {...others} />);
}

export default Component;
