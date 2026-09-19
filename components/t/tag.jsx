import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_08yzbiq.css';

const viewBox = {"width":464,"height":504};
const content = `<path class="z_08yzbiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:tag"} {...others} />);
}

export default Component;
