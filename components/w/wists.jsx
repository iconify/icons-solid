import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf1_q-baz.css';

const viewBox = {"width":464,"height":472};
const content = `<path class="yf1_q-baz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:wists"} {...others} />);
}

export default Component;
