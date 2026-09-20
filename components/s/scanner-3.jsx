import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd2q-gb1n.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xd2q-gb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:scanner-3"} {...others} />);
}

export default Component;
