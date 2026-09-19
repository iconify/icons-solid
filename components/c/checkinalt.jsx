import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw-oc8bqw.css';

const viewBox = {"width":896,"height":1024};
const content = `<path class="gw-oc8bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:checkinalt"} {...others} />);
}

export default Component;
