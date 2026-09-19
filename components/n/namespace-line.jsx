import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6zk_hi4f.css';
import '../../css/k/kwb2ybc3g.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="t6zk_hi4f"/><path class="kwb2ybc3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:namespace-line"} {...others} />);
}

export default Component;
