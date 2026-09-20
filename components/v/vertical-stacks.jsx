import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg1xs5bde.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jg1xs5bde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:vertical-stacks"} {...others} />);
}

export default Component;
