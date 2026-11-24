import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v72yvk6dr.css';
import '../../css/e/e2m9rbc6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v72yvk6dr"/><path clip-rule="evenodd" class="e2m9rbc6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:ball-wave-filled"} {...others} />);
}

export default Component;
