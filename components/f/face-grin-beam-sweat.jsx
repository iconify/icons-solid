import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdci4xqph.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gdci4xqph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:face-grin-beam-sweat"} {...others} />);
}

export default Component;
