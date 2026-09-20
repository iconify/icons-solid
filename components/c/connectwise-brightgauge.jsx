import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sao3gljiv.css';
import '../../css/a/agnu50b8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sao3gljiv"/><path class="agnu50b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:connectwise-brightgauge"} {...others} />);
}

export default Component;
