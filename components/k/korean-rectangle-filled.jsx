import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpb0-dwzz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bpb0-dwzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:korean-rectangle-filled"} {...others} />);
}

export default Component;
