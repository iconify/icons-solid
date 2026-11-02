import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h96s-oj-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h96s-oj-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dish-cover-fill"} {...others} />);
}

export default Component;
