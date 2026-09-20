import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swc4nv0cw.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="swc4nv0cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:transport"} {...others} />);
}

export default Component;
