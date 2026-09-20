import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc3e-fbhg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pc3e-fbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:paste-solid"} {...others} />);
}

export default Component;
