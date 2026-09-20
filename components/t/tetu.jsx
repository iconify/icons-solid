import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imfqewbas.css';
import '../../css/q/q0vdj5bvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="imfqewbas"/><path class="q0vdj5bvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:tetu"} {...others} />);
}

export default Component;
