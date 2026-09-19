import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4kazfb2r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b4kazfb2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:guy-open-mouth"} {...others} />);
}

export default Component;
