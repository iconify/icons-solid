import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gndsrxvsa.css';
import '../../css/n/n7xm2kttp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gndsrxvsa"/><path class="n7xm2kttp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:connection-send"} {...others} />);
}

export default Component;
