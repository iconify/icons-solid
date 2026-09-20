import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5cl7x5rb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k5cl7x5rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:data-transfer-diagonal"} {...others} />);
}

export default Component;
