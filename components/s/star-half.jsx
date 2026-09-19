import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_jz5xwqo.css';
import '../../css/n/nx8_58b1t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x_jz5xwqo"/><path class="nx8_58b1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:star-half"} {...others} />);
}

export default Component;
