import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7ggnqb5n.css';
import '../../css/n/nuxe1q7gx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k7ggnqb5n"/><path class="nuxe1q7gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:filter-alt-duotone-line"} {...others} />);
}

export default Component;
