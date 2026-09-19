import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y16uqnbuh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y16uqnbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-face-mask-1"} {...others} />);
}

export default Component;
