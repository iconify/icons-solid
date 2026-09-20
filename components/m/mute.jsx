import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scesoxb7f.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="scesoxb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:mute"} {...others} />);
}

export default Component;
