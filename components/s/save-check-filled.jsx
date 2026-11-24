import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otxbt5c7t.css';
import '../../css/k/k7-izcbee.css';
import '../../css/e/e_r9uibzg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="otxbt5c7t"/><path class="k7-izcbee"/><path class="e_r9uibzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:save-check-filled"} {...others} />);
}

export default Component;
