import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0m5hyblq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z0m5hyblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:bitcoin-circle"} {...others} />);
}

export default Component;
