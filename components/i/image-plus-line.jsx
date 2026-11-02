import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-0odbcwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-0odbcwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:image-plus-line"} {...others} />);
}

export default Component;
