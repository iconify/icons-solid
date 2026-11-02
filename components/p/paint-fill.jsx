import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9iqu7v-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9iqu7v-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:paint-fill"} {...others} />);
}

export default Component;
