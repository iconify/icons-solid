import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-f-uz-ne.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-f-uz-ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrow-up-z-a"} {...others} />);
}

export default Component;
