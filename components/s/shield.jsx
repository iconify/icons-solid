import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd9e8th7d.css';
import '../../css/b/b0w0zoqxq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cd9e8th7d"/><path class="b0w0zoqxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:shield"} {...others} />);
}

export default Component;
