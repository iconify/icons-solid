import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jky5v_bzw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jky5v_bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:cloud-offline-16"} {...others} />);
}

export default Component;
