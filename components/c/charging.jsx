import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3k1gxm3n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a3k1gxm3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:charging"} {...others} />);
}

export default Component;
