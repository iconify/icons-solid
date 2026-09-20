import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2_z2v3wb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c2_z2v3wb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:forward-end-circle"} {...others} />);
}

export default Component;
