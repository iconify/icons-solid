import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ss-s9gi8c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ss-s9gi8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:empty-set"} {...others} />);
}

export default Component;
