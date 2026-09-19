import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v43-w8bka.css';

const viewBox = {"width":667.188,"height":1000};
const content = `<path class="v43-w8bka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:jabber"} {...others} />);
}

export default Component;
