import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxxk3-bpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxxk3-bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:envelope-share"} {...others} />);
}

export default Component;
