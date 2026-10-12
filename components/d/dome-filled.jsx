import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vewqg9b0r.css';
import '../../css/g/gcy3r1rbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vewqg9b0r"/><path class="gcy3r1rbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:dome-filled"} {...others} />);
}

export default Component;
