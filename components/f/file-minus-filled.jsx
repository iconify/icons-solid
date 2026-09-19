import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt6of_i9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rt6of_i9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-minus-filled"} {...others} />);
}

export default Component;
