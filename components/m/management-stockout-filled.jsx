import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qeolk1tpq.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qeolk1tpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:management-stockout-filled"} {...others} />);
}

export default Component;
