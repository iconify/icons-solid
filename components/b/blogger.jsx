import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mff0z4bpo.css';

const viewBox = {"width":990.933,"height":1000};
const content = `<path class="mff0z4bpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:blogger"} {...others} />);
}

export default Component;
