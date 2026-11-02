import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq0x9-boc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uq0x9-boc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:star-topper-fill"} {...others} />);
}

export default Component;
