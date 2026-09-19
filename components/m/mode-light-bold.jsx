import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvlvhpb4k.css';
import '../../css/e/egfs-cciu.css';
import '../../css/p/pu3k_cy8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cvlvhpb4k"><circle class="egfs-cciu"/><path class="pu3k_cy8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:mode-light-bold"} {...others} />);
}

export default Component;
