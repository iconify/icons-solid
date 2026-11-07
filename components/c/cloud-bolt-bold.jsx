import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akziae8mx.css';
import '../../css/h/h3ccn7bcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="akziae8mx"/><path class="h3ccn7bcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-bolt-bold"} {...others} />);
}

export default Component;
