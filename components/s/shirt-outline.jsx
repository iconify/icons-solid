import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exs91hbwo.css';
import '../../css/k/kxpsf4byp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="exs91hbwo"/><path class="kxpsf4byp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:shirt-outline"} {...others} />);
}

export default Component;
