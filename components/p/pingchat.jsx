import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edoc9w87l.css';

const viewBox = {"width":472,"height":488};
const content = `<path class="edoc9w87l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:pingchat"} {...others} />);
}

export default Component;
