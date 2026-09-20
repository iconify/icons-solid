import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx9irdq5m.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="gx9irdq5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:nswitch"} {...others} />);
}

export default Component;
