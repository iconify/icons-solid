import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9c7k7buf.css';
import '../../css/d/deqru1bcw.css';
import '../../css/r/r2g2ubnfk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x9c7k7buf"/><path class="deqru1bcw"/><path class="r2g2ubnfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:park-and-ride-20"} {...others} />);
}

export default Component;
