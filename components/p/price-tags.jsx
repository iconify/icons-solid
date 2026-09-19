import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp8c-eb8i.css';
import '../../css/h/hid2coqpb.css';

const viewBox = {"width":20,"height":16};
const content = `<path class="fp8c-eb8i"/><path class="hid2coqpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:price-tags"} {...others} />);
}

export default Component;
