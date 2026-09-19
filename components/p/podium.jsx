import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca-7h_wwy.css';

const viewBox = {"width":771,"height":1024};
const content = `<path class="ca-7h_wwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:podium"} {...others} />);
}

export default Component;
