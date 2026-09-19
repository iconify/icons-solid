import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-16e2k1m.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="g-16e2k1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:sharedhosting"} {...others} />);
}

export default Component;
