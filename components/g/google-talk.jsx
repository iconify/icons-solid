import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grlb9zb6b.css';

const viewBox = {"width":464,"height":488};
const content = `<path class="grlb9zb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:google-talk"} {...others} />);
}

export default Component;
