import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs6abtbab.css';
import '../../css/y/y0euu7b0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cs6abtbab"/><path class="y0euu7b0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:wiper-line"} {...others} />);
}

export default Component;
