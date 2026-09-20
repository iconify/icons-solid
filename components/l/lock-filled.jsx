import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsb_3sb8f.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tsb_3sb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:lock-filled"} {...others} />);
}

export default Component;
