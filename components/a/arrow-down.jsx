import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ood-b4bpj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ood-b4bpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:arrow-down"} {...others} />);
}

export default Component;
