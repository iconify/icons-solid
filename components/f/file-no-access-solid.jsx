import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-e56suxy.css';
import '../../css/g/gjx1o8bfz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g-e56suxy"/><path clip-rule="evenodd" class="gjx1o8bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:file-no-access-solid"} {...others} />);
}

export default Component;
