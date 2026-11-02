import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjfa6i3ef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tjfa6i3ef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:safe-flash-line"} {...others} />);
}

export default Component;
