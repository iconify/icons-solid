import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs6ffwolm.css';
import '../../css/o/oiec-xb0s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gs6ffwolm"/><path clip-rule="evenodd" class="oiec-xb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:open-recent-24"} {...others} />);
}

export default Component;
