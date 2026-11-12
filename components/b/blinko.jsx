import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut7pyrqfx.css';
import '../../css/z/zsi22_bxh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ut7pyrqfx"/><path class="zsi22_bxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:blinko"} {...others} />);
}

export default Component;
