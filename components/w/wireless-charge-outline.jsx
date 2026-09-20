import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bf3k0wf1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bf3k0wf1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wireless-charge-outline"} {...others} />);
}

export default Component;
