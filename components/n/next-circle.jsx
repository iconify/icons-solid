import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zquszm3xo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zquszm3xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:next-circle"} {...others} />);
}

export default Component;
