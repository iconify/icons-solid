import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k42v9bvgu.css';
import '../../css/z/z3o5mebhd.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="k42v9bvgu"/><path class="z3o5mebhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:denmark"} {...others} />);
}

export default Component;
