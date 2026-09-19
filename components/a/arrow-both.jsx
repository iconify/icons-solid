import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0ie7db7s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c0ie7db7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:arrow-both"} {...others} />);
}

export default Component;
