import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ky8c2yxsy.css';
import '../../css/o/oy5x1vbap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ky8c2yxsy"/><path class="oy5x1vbap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-zipped"} {...others} />);
}

export default Component;
