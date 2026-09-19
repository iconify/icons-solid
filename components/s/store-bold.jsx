import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvlvhpb4k.css';
import '../../css/t/tgv1dsb4s.css';
import '../../css/c/c2_1yk01e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cvlvhpb4k"><path class="tgv1dsb4s"/><path class="c2_1yk01e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:store-bold"} {...others} />);
}

export default Component;
