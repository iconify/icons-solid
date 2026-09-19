import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffkma_bxg.css';
import '../../css/o/ob3ntmvsq.css';
import '../../css/h/hntz4fq6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ffkma_bxg"/><path class="ob3ntmvsq"/><circle class="hntz4fq6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-rss"} {...others} />);
}

export default Component;
