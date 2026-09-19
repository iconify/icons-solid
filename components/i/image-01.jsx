import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkc0vy_ze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xkc0vy_ze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:image-01"} {...others} />);
}

export default Component;
