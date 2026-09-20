import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr89lk6nk.css';
import '../../css/m/mli_10bmg.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="zr89lk6nk"/><path class="mli_10bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:export"} {...others} />);
}

export default Component;
