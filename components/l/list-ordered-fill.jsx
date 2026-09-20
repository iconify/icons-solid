import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtn8ih8gz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dtn8ih8gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:list-ordered-fill"} {...others} />);
}

export default Component;
