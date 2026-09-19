import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7u3bta8y.css';
import '../../css/n/nf_ef62wo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k7u3bta8y"/><path class="nf_ef62wo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:calendar-minus"} {...others} />);
}

export default Component;
