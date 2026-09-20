import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj4pe0big.css';

const viewBox = {"width":264.6,"height":255.6};
const content = `<path class="sj4pe0big"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nestjs"} {...others} />);
}

export default Component;
