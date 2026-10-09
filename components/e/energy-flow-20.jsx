import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fizh9bcok.css';
import '../../css/b/bi4bqnltf.css';
import '../../css/g/ga2g5dbmp.css';
import '../../css/g/gnp00z80k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fizh9bcok"/><path class="bi4bqnltf"/><path class="ga2g5dbmp"/><path class="gnp00z80k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-flow-20"} {...others} />);
}

export default Component;
