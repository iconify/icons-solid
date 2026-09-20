import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwqd8u50l.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xwqd8u50l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:a-frame-signboard"} {...others} />);
}

export default Component;
