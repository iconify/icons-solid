import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6lmx-t-t.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="i6lmx-t-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:monitor-slash-fill"} {...others} />);
}

export default Component;
