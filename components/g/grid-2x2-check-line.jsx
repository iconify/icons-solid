import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djl89ku6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djl89ku6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:grid-2x2-check-line"} {...others} />);
}

export default Component;
