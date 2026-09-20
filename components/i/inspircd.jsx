import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5x_o2bjy.css';
import '../../css/z/zo1w86b7y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a5x_o2bjy"/><path class="zo1w86b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:inspircd"} {...others} />);
}

export default Component;
