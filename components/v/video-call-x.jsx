import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2b3r1gbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c2b3r1gbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:video-call-x"} {...others} />);
}

export default Component;
