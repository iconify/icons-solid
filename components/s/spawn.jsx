import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlwy_6z1q.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="dlwy_6z1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:spawn"} {...others} />);
}

export default Component;
