import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb699of5o.css';
import '../../css/s/s397rccgp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eb699of5o"/><path class="s397rccgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:logo-nodejs"} {...others} />);
}

export default Component;
