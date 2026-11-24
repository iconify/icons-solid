import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewoyqj-ul.css';
import '../../css/o/ogjjes7pl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ewoyqj-ul"/><path class="ogjjes7pl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sailboat-filled"} {...others} />);
}

export default Component;
