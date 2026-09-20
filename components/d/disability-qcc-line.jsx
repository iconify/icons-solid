import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh2_t1pnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kh2_t1pnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:disability-qcc-line"} {...others} />);
}

export default Component;
