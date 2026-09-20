import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj6o8abyb.css';
import '../../css/b/bnus8tbil.css';
import '../../css/t/t3kxshl8m.css';

const viewBox = {"width":262,"height":262,"left":-3};
const content = `<path class="lj6o8abyb"/><path class="bnus8tbil"/><path class="t3kxshl8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sourcegraph"} {...others} />);
}

export default Component;
