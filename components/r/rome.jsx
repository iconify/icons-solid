import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jngg2rbis.css';
import '../../css/w/w0onahbsz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jngg2rbis"/><path class="w0onahbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:rome"} {...others} />);
}

export default Component;
