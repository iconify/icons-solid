import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv9bc4j-a.css';
import '../../css/z/zmmw0rbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kv9bc4j-a"/><path class="zmmw0rbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:boa"} {...others} />);
}

export default Component;
