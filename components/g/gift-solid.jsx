import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk5yjk1vh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zk5yjk1vh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:gift-solid"} {...others} />);
}

export default Component;
