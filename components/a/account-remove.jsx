import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/h/haw7oj.css';
import '../../css/p/ppgzfw.css';
import '../../css/x/x5jt8i.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c haw7oj"/><path class="a0m25c ppgzfw"/><path class="a0m25c x5jt8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:account-remove"} {...others} />);
}

export default Component;
