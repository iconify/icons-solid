import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt3-jpbqk.css';

const viewBox = {"width":312,"height":488};
const content = `<path class="bt3-jpbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:zootool"} {...others} />);
}

export default Component;
