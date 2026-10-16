import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lml3v6bum.css';
import '../../css/w/wgzcd4bsb.css';

const viewBox = {"width":57.6,"height":19.5};
const content = `<path class="lml3v6bum"/><path class="wgzcd4bsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:saleor"} {...others} />);
}

export default Component;
