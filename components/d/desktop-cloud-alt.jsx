import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl51nvbub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cl51nvbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:desktop-cloud-alt"} {...others} />);
}

export default Component;
