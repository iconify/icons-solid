import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0o9-ebpg.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="g0o9-ebpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:contrast"} {...others} />);
}

export default Component;
