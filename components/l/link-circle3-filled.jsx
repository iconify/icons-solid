import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvj3hy0ml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvj3hy0ml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:link-circle3-filled"} {...others} />);
}

export default Component;
