import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbcpwhboh.css';
import '../../css/m/m-pwbqb_w.css';
import '../../css/n/n2yc4rnpz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gbcpwhboh"/><path class="m-pwbqb_w"/><path class="n2yc4rnpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:square-3-stack-3d-16-solid"} {...others} />);
}

export default Component;
