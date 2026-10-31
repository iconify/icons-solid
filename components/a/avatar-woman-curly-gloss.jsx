import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y38x4ibjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y38x4ibjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-curly-gloss"} {...others} />);
}

export default Component;
