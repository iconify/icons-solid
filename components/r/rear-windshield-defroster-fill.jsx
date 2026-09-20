import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub-rgf-9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ub-rgf-9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rear-windshield-defroster-fill"} {...others} />);
}

export default Component;
