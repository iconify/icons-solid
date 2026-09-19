import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3s2gdcyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3s2gdcyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:3d-move"} {...others} />);
}

export default Component;
