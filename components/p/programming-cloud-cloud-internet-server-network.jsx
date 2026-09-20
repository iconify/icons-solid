import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjzoe0bpe.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="gjzoe0bpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:programming-cloud-cloud-internet-server-network"} {...others} />);
}

export default Component;
