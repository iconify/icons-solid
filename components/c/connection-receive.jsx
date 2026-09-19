import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpl6w6far.css';
import '../../css/n/n7xm2kttp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gpl6w6far"/><path class="n7xm2kttp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:connection-receive"} {...others} />);
}

export default Component;
