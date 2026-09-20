import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjz_tdl7k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kjz_tdl7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nvidia-dark"} {...others} />);
}

export default Component;
