import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwagshezp.css';
import '../../css/n/nfqwn6-5t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wwagshezp"/><path class="nfqwn6-5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brush-48"} {...others} />);
}

export default Component;
