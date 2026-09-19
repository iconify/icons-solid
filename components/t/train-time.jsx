import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wd_kcpkgg.css';
import '../../css/j/j7n6imbex.css';
import '../../css/a/ar36zcbgz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wd_kcpkgg"/><path class="j7n6imbex"/><path class="ar36zcbgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:train-time"} {...others} />);
}

export default Component;
