import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol8o5mb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ol8o5mb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:silent-fill"} {...others} />);
}

export default Component;
