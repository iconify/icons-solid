import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-9uribkc.css';
import '../../css/k/kl96fjb_a.css';
import '../../css/z/zj2jh3sfl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k-9uribkc"/><path class="kl96fjb_a"/><path class="zj2jh3sfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lockout-48-bold"} {...others} />);
}

export default Component;
