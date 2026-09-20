import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdtmjzblg.css';
import '../../css/g/gx3ml1b9y.css';
import '../../css/l/lzz9wzsya.css';
import '../../css/i/isjb93bxb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pdtmjzblg"/><path class="gx3ml1b9y"/><path class="lzz9wzsya"/><path class="isjb93bxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-cactus"} {...others} />);
}

export default Component;
