import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecktfepqc.css';
import '../../css/q/qd7nioben.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ecktfepqc"/><path class="qd7nioben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:drop"} {...others} />);
}

export default Component;
