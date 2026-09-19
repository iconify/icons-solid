import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgo980z3u.css';

const viewBox = {"width":1664,"height":1792};
const content = `<path class="sgo980z3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:hand-pointer-o"} {...others} />);
}

export default Component;
