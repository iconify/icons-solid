import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5oj8v8lj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o5oj8v8lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ice-cream-2-fill"} {...others} />);
}

export default Component;
