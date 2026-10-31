import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1fo9snfu.css';
import '../../css/l/l9cl-boot.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="g1fo9snfu"/><path class="l9cl-boot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:peru"} {...others} />);
}

export default Component;
