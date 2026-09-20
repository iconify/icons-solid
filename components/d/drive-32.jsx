import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfcf6nbxf.css';
import '../../css/x/x0bdrkbiv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rfcf6nbxf"/><path clip-rule="evenodd" class="x0bdrkbiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:drive-32"} {...others} />);
}

export default Component;
