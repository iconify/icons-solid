import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlp5gb8zq.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="tlp5gb8zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:baloon"} {...others} />);
}

export default Component;
