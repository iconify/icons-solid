import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzta2cbuv.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="kzta2cbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-regular:meh-rolling-eyes"} {...others} />);
}

export default Component;
