import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi0e_db3y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oi0e_db3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:wine-glass"} {...others} />);
}

export default Component;
