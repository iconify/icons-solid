import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2r7a0-pb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2r7a0-pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zyx"} {...others} />);
}

export default Component;
