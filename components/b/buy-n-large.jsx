import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4t4632zq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o4t4632zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:buy-n-large"} {...others} />);
}

export default Component;
