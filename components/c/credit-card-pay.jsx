import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7a949o5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7a949o5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:credit-card-pay"} {...others} />);
}

export default Component;
