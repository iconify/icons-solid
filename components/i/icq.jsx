import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e79s1fb2n.css';

const viewBox = {"width":981.393,"height":1000};
const content = `<path class="e79s1fb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:icq"} {...others} />);
}

export default Component;
