import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlp6nh86n.css';
import '../../css/n/ng73f_8fh.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="jlp6nh86n"/><path class="ng73f_8fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:globe-favorite"} {...others} />);
}

export default Component;
