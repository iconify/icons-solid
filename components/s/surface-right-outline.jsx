import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o59d3w3ws.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o59d3w3ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:surface-right-outline"} {...others} />);
}

export default Component;
