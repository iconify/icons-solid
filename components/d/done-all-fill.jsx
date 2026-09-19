import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceatd5b9s.css';
import '../../css/w/w6jecwb2y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ceatd5b9s"/><path class="w6jecwb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:done-all-fill"} {...others} />);
}

export default Component;
