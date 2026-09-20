import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw23xpb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bw23xpb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hanger-2-bold"} {...others} />);
}

export default Component;
