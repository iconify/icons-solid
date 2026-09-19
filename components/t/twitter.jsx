import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7ybdmbxw.css';

const viewBox = {"width":352,"height":488};
const content = `<path class="p7ybdmbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:twitter"} {...others} />);
}

export default Component;
