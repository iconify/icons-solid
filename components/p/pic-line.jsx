import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p068o5acv.css';
import '../../css/f/f-iag6myh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p068o5acv"/><path class="f-iag6myh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pic-line"} {...others} />);
}

export default Component;
