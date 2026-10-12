import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed-8irbik.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ed-8irbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:briefcase-medical-filled"} {...others} />);
}

export default Component;
