import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f13g02hns.css';
import '../../css/y/y_xfi-b0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f13g02hns"/><path class="y_xfi-b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bank-fill"} {...others} />);
}

export default Component;
