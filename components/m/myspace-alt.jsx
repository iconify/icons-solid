import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq9sw1b5k.css';

const viewBox = {"width":432,"height":488};
const content = `<path class="lq9sw1b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:myspace-alt"} {...others} />);
}

export default Component;
