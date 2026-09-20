import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt6ddsb5j.css';
import '../../css/k/kbv8s5b4o.css';
import '../../css/q/qnk5sy1bt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xt6ddsb5j"/><path class="kbv8s5b4o"/><path class="qnk5sy1bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:money-payments-self-payment"} {...others} />);
}

export default Component;
