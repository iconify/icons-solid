import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u06tkfbua.css';
import '../../css/k/ktvtx3m1p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u06tkfbua"/><path clip-rule="evenodd" class="ktvtx3m1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:adobe-premiere-solid"} {...others} />);
}

export default Component;
