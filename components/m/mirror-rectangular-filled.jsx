import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4xhtv3en.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g4xhtv3en"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mirror-rectangular-filled"} {...others} />);
}

export default Component;
