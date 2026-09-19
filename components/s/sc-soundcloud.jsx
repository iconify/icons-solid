import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0s0by2sq.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="o0s0by2sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:sc-soundcloud"} {...others} />);
}

export default Component;
