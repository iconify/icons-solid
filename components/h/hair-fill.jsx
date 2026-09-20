import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnyxq8n6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cnyxq8n6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hair-fill"} {...others} />);
}

export default Component;
