import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d47xi2b9o.css';
import '../../css/p/pb9ghc-7p.css';
import '../../css/v/vd00roi9p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d47xi2b9o"/><path class="pb9ghc-7p"/><path class="vd00roi9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:franc"} {...others} />);
}

export default Component;
