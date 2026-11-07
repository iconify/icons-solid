import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/conyuxbxt.css';
import '../../css/v/vlg3w9b6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="conyuxbxt"/><path class="vlg3w9b6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:armchair-bold"} {...others} />);
}

export default Component;
