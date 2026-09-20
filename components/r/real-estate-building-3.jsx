import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbqs97bkm.css';
import '../../css/n/n39l6qvec.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jbqs97bkm"/><path class="n39l6qvec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:real-estate-building-3"} {...others} />);
}

export default Component;
