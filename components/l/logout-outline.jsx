import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iiirhsbnc.css';
import '../../css/k/k-ib4_rmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iiirhsbnc"/><path clip-rule="evenodd" class="k-ib4_rmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:logout-outline"} {...others} />);
}

export default Component;
