import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybcv3hbjh.css';

const viewBox = {"width":1024,"height":2016};
const content = `<path class="ybcv3hbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:wine"} {...others} />);
}

export default Component;
