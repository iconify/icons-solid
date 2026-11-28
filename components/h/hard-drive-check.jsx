import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2nvtzvxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w2nvtzvxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:hard-drive-check"} {...others} />);
}

export default Component;
