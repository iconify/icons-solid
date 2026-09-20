import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/kax9pczmm.css';
import '../../css/o/ox0xq7bpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="kax9pczmm"/><path class="ox0xq7bpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:magnifying-glass"} {...others} />);
}

export default Component;
