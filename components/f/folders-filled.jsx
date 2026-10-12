import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5hklmbye.css';
import '../../css/d/d-1rjbc-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m5hklmbye"/><path class="d-1rjbc-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folders-filled"} {...others} />);
}

export default Component;
