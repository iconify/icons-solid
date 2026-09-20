import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/q/q9aucu.css';
import '../../css/n/nfmr0h.css';
import '../../css/s/so-to-14.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c q9aucu"/><path class="a0m25c nfmr0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:confirm-circle-to-circle-transition"} {...others} />);
}

export default Component;
