import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_dfwp-1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_dfwp-1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:folder-exclamation"} {...others} />);
}

export default Component;
