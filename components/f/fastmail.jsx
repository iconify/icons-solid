import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpsxqmvrr.css';
import '../../css/g/g5l5kqz1d.css';
import '../../css/f/flbg-5qfl.css';
import '../../css/l/lucz29d3n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vpsxqmvrr"/><path class="g5l5kqz1d"/><path class="flbg-5qfl"/><path class="lucz29d3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fastmail"} {...others} />);
}

export default Component;
