import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nybji0bvn.css';

const viewBox = {"width":400,"height":488};
const content = `<path class="nybji0bvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:coroflot"} {...others} />);
}

export default Component;
