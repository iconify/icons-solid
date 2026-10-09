import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7x7egb-c.css';
import '../../css/s/sqs8isb_t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c7x7egb-c"/><path class="sqs8isb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bbq-20"} {...others} />);
}

export default Component;
