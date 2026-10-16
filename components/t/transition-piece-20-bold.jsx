import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/poxn7fb3x.css';
import '../../css/h/h4vfp4baj.css';
import '../../css/p/p6isisbfn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="poxn7fb3x"/><path class="h4vfp4baj"/><path class="p6isisbfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transition-piece-20-bold"} {...others} />);
}

export default Component;
