import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmp5x0bgg.css';
import '../../css/k/kqqve2g3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmp5x0bgg"/><path class="kqqve2g3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sort-amount-up-alt"} {...others} />);
}

export default Component;
