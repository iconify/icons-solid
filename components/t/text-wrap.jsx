import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9_mc5n2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k9_mc5n2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:text-wrap"} {...others} />);
}

export default Component;
