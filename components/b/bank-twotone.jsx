import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqmh9p0fn.css';
import '../../css/v/vv7d6sb3h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="eqmh9p0fn"/><path class="vv7d6sb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:bank-twotone"} {...others} />);
}

export default Component;
