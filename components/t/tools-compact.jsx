import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbzhumfdd.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="jbzhumfdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:tools-compact"} {...others} />);
}

export default Component;
