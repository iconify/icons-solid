import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_xa14bnr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w_xa14bnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cursor-2-fill"} {...others} />);
}

export default Component;
