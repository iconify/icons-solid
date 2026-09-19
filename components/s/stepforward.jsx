import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_uyzbsvr.css';

const viewBox = {"width":1025,"height":1025};
const content = `<path class="o_uyzbsvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:stepforward"} {...others} />);
}

export default Component;
