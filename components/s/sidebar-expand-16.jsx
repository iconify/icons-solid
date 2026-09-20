import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sld39kbbp.css';
import '../../css/o/o4c4j_blr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sld39kbbp"/><path class="o4c4j_blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:sidebar-expand-16"} {...others} />);
}

export default Component;
